const customRoutes = {
  // "页面路径": "自定义路由"
  '/pages/index/index': '/index', // 首页,
  '/pages/second/index': '/second', // 副页,
};

const browserRouterCfg = {
  mode: 'browser', // 'hash' | 'browser' | 'multi',
  basename: process.env.TARO_APP_BASE_NAME,
  customRoutes,
}

const hashRouterCfg = {
  mode: 'hash',
  customRoutes,
}

module.exports = {
  browserRouterCfg,
  hashRouterCfg
}