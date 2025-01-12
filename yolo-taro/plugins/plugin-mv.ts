import { IPluginContext } from '@tarojs/service';

const fs = require('fs-extra')
const path = require('path')


export default (ctx: IPluginContext, options) => {
  ctx.onBuildFinish(() => {

    console.log(ctx, options)
    // Taro v3.1.4
    const blended = ctx.runOpts.blended || ctx.runOpts.options.blended

    if (!blended || ctx.runOpts.options.platform !== 'weapp') return

    const targetRootPath = path.resolve(__dirname, '../../yolo-minip')
    const targetBasePath = path.join(targetRootPath, 'src')
    const outputPath = path.resolve(__dirname, '../dist')

    const ignoreFiles = [
      'app.js.LICENSE.txt',
      'app.json',
      'app.wxss',
      'vendors.js.LICENSE.txt',
      'project.config.json',
    ];

    // 文件复制到taro目录，文件夹拷贝过去覆盖
    fs.readdirSync(outputPath, { withFileTypes: true }).forEach(function (dirent) {
      const filePath = path.join(outputPath, dirent.name);
      if (dirent.isFile() && dirent.name === 'app.js') {
        fs.copySync(filePath, path.join(targetBasePath, 'taro_app.js'))
      } else if (!ignoreFiles.includes(dirent.name)) {
        fs.copySync(filePath, path.join(targetBasePath, dirent.name))
      }
    });
    console.log('拷贝结束！')
  })
}
