module.exports = {
  // 注意：这里的配置的环境变量只能在 业务代码 中使用，
  // 无法在 node环境 代码中获取到其配置的值， 
  // 也不会改变 node环境 中 process.env.NODE_ENV 的值。
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  // css压缩工具
  csso: {
    enable: true,
    config: {
      // 配置项同 https://cssnano.co/docs/what-are-optimisations/
    },
  },
  mini: {},
  h5: {
    enableSourceMap: true,
    sourceMapType: 'source-map',
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    // webpackChain (chain) {
    //   /**
    //    * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。
    //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
    //    */
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

    //   /**
    //    * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
    //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
    //    */
    //   const path = require('path')
    //   const Prerender = require('prerender-spa-plugin')
    //   const staticDir = path.join(__dirname, '..', 'dist')
    //   chain
    //     .plugin('prerender')
    //     .use(new Prerender({
    //       staticDir,
    //       routes: [ '/pages/index/index' ],
    //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
    //     }))
    // }
  }
}
