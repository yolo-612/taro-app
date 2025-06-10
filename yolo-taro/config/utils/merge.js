const path = require('path');
const { browserRouterCfg, hashRouterCfg } = require('../routes');

// 是否使用hash路由
const isHash = false;

// 合并h5配置项
function mergeH5ConfigFunc () {
  const mergedH5Cfg = {};
  /**
   * 功能配置项：
   *   1. 构建产物配置项：buildCfg 【包含：outputCfg\publicPath】
   *   2. 路由配置项：routerCfg
   */
  // 构建产物配置项
  const outputCfg = {
    filename: 'js/[name].[fullhash:16].js',
    chunkFilename: 'js/[name].[chunkhash:16].js',
    path: path.resolve(__dirname, `../../dist/${process.env.TARO_APP_ENV}/`), // 构建文件存放目录
  }
  const buildCfg = isHash ? {
    publicPath: '/',
    output: outputCfg,
  } : {
    publicPath: `https://xxx-${process.env.TARO_APP_ENV === 'sit' ? '.sit.' : ''}static.xxx.com${process.env.TARO_APP_BASE_NAME}`,  // 注意本地开发环境不能配置这个
    output: outputCfg,
  };
  // 路由配置项
  const routerCfg = isHash ? hashRouterCfg : browserRouterCfg;

  /**
   * 整体配置项：
   *   1. 公共配置项：commonCfg【不区分开发、测试、生产环境的配置项】
   *   2. 基础配置项：baseConfig 【区分测试生产的配置项】
   */
  // 公共配置项
  const commonCfg = {
    miniCssExtractPluginOption: {
      filename: 'css/[name].[fullhash:16].css',
      chunkFilename: 'css/[id].[chunkhash:16].css',
    },
    htmlPluginOption: {
      inject: 'body',
      templateParameters: {
        preloadLinks: [],
      },
    },
  };
  // 基础配置项
  const baseConfig = process.env.NODE_ENV === 'development'
        ? {
          devServer: {
            open: `${process.env.TARO_APP_BASE_NAME}/index`,
          },
          output: outputCfg,
          router: routerCfg,
        } : {
          ...buildCfg,
          router: routerCfg
        };

  /**
   * 合并配置项：
   *   1. h5
   */     
  return Object.assign(mergedH5Cfg, {
    h5: {
      ...baseConfig,
      ...commonCfg,
    }
  });
}

module.exports = {
  mergeH5ConfigFunc
}