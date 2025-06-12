const path = require('path');
const minimist = require('minimist');

const { mergeH5ConfigFunc } = require('./utils/merge');
const { generatorTempAppFile } = require('./utils/generatePageConfig');

const { customRoutes } = require('./routes/index');

// option参数整理：
//   type： h5 | weapp
const options = minimist(process.argv);

// 根据定义的路由 确定要构建的页面
const includePages = options.type === 'h5' ? Object.keys(customRoutes) : [];

// 根据模板文件【app.config.tpl.h5 / app.config.tpl】+需要构建的页面includePages
// 生成新的app.config.ts [实现按需构建页面]
// 注意: includePages 不为空时，按照 includePages中的页面复制进入到app.config.ts 中【目前的h5端场景】
//       includePages 为空时，直接复制相应的模板文件到 app.config.ts 【目前的weapp端场景】
generatorTempAppFile(includePages, options.type)

const plugins = []
if (options.blended) {
  plugins.push([path.resolve(__dirname, '../plugins/plugin-mv.ts')])
}  

const config = {
  projectName: 'yolo-taro',
  date: '2025-1-5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins,
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 智能分包
    optimizeMainPackage: {
      enable: true,
    },

  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'module', // 支持 'module'（只 *.module.scss 有效）或 'global'（全部启用）
          generateScopedName: '[local]__[hash:base64:5]',
        },
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  const mergeH5Cfg = mergeH5ConfigFunc()
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'), mergeH5Cfg)
  }
  return merge({}, config, require('./prod'), mergeH5Cfg)
}
