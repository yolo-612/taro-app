const fs = require('fs');
const path = require('path');

const babelParser = require('@babel/parser');
const babelTraverse = require('@babel/traverse').default;
const babelGenerator = require('@babel/generator').default;
const babelTypes = require('@babel/types');

function fileExist(filePath) {
  try {
    fs.statSync(filePath);
    return true
  } catch (err) {
    return false
  }
}

// 复制 目录src 为 dest
function copyFolderRecursive(src, dest) {
  const stats = fs.statSync(src);

  if (stats.isFile()) {
    // 如果是文件，复制文件内容
    let contents = fs.readFileSync(src);
    fs.writeFileSync(dest, contents);
  } else if (stats.isDirectory()) {
    // 判断目标路径是否存在，不存在则创建
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }

    // 获取当前目录下所有文件和子文件夹
    let files = fs.readdirSync(src);

    // 遍历文件和子文件夹
    for (let i = 0; i < files.length; i++) {
      let current = fs.lstatSync(path.join(src, files[i]));
      let destP = path.join(dest, files[i]);

      // 如果是文件夹，递归调用
      if (current.isDirectory()) {
        copyFolderRecursive(path.join(src, files[i]), destP);
      } else {
        // 如果是文件，直接复制文件内容
        let content = fs.readFileSync(path.join(src, files[i]));
        fs.writeFileSync(destP, content);
      }
    }
  }
}

function delDir (folderPath) {
  if (fileExist(folderPath)) {
    fs.rmSync(folderPath, { recursive: true });
  }
}


function getFileContent (filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function generatorTempAppFile (pages = [], type) {
  let tpl = 'app.config.tpl.ts';
  switch (type) {
    case 'weapp':
      tpl = 'app.config.tpl.ts'
      break;
    case 'h5':
      tpl = 'app.config.tpl.h5.ts';
      break;
    default:
      tpl = 'app.config.tpl.ts';
      break;
  }
  const originAppConfigPath = path.resolve(__dirname, `../../src/${tpl}`);
  const changedAppConfigPath = path.resolve(__dirname, '../../src/app.config.ts');
  const code = getFileContent(originAppConfigPath);
  const ast = babelParser.parse(code, {
    sourceType: "module",
    plugins: [
      "typescript",
    ],
  });
  babelTraverse(ast, {
    ObjectProperty(astPath) {
      if (astPath.node.key.name === 'pages' && pages.length) {
        astPath.get('value').replaceWith(babelTypes.arrayExpression(pages.map(pageStr => babelTypes.stringLiteral(pageStr))));
      }
      if (astPath.node.key.name === 'subPackages' && pages.length) {
        astPath.get('value').replaceWith(babelTypes.arrayExpression([]));
      }
    }
  });
  const changedCode = babelGenerator(ast, {})
  fs.writeFileSync(changedAppConfigPath, changedCode.code, { encoding: 'utf-8' });
}

module.exports = {
  fileExist,
  delDir,
  generatorTempAppFile,
  copyFolderRecursive
}