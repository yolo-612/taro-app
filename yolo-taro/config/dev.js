module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      host: '127.0.0.1',
      port: 6001,
      open: 'index.html', //  设置其为 true 以打开你的默认浏览器, 设置在浏览器中打开指定页面：
      headers: { // 为所有响应添加 headers：
        'Access-Control-Allow-Origin': '*', 
      },
      allowedHosts: 'all', // 该选项允许将允许访问开发服务器的服务列入白名单。
      https: false,
      // 作用: 用于解决使用HTML5 History API实现的前端路由在开发环境下的问题
      // 效果: 当在浏览器中输入地址，找不到对应的页面或服务时，会直接将index.html页面渲染出来。
      historyApiFallback: true,
    },
  }
}
