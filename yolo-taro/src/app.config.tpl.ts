export default defineAppConfig({
  pages: [
    'pages/my-welfare/index',
    'pages/sign/home/index',
    'pages/new-home/index',
    'pages/my/index',
    'pages/same-city-trucks/index/index',
    'pages/workspace/index',
  ],
  subPackages: [
    {
      root: 'pages/address-book/',
      pages: [
        'list/index',
        'edit/index',
        'sync/index',
      ],
    },
    {
      root: 'pages/same-city-trucks/sub-pages/',
      pages: [
        'order-list/index',
        'order-confirm/index',
        'cargo-info/index',
        'add-services/index',
        'driver-list/index',
        'plan-detail/index',
        'share-batch-order-success/index',
        'share-batch-order-receive-info/index',
        'single-webview/index',
      ],
    },
    {
      root: 'activity/',
      pages: [
        'webank-introduce/index',
        'corporate-rights/index',
        'enterprise-rights/index',
        'holiday-promotion/index',
      ],
    },
    {
      root: 'pages/sign2/',
      pages: [
        'prepare/index',
        'help/index',
        'solutions/index',
        'solutions-detail/index',
        'apply-success/index',
        'consult-apply/index',
        'collect-info/index',
        'apply-entry/index',
        'prepay-home/index',
      ],
    },
    {
      root: 'pages/finance/',
      pages: [
        'no-pay/index',
      ],
    },
    {
      root: 'pages/pay/',
      pages: [
        'invoke-pay/index',
        'invoke-entrust/index',
      ],
    },
    {
      root: 'pages/h5/',
      pages: [
        'index',
      ],
    },
    {
      root: 'pages/order/',
      pages: [
        'index/index',
      ],
    },
    {
      root: 'pages/order-new/',
      pages: [
        'index/index',
        'result/index',
      ],
    },
    {
      root: 'pages/address-book-new/',
      pages: ['list/index', 'edit/index', 'sync/index', 'detail/index'],
    },
    {
      root: 'pages/config/',
      pages: [
        'index/index',
      ],
    },
    {
      root: 'pages/trading-community/',
      pages: [
        'index/index',
        'calendar/index',
        'class-apply/index',
        'offline-class/index',
        'study-tours/index',
      ],
    },
    {
      root: 'pages/questionnaire/',
      pages: [
        'index/index',
        'result/index',
      ],
    },
    {
      root: 'pages/my/',
      pages: [
        'all-function/index',
      ],
    },
    {
      root: 'pages/city-service/',
      pages: [
        'index/index',
      ],
    },
    {
      root: 'pages/after-sale-service/',
      pages: [
        'order-list/index',
      ],
    },
    {
      root: 'pages/licenseIndex/',
      pages: [
        'index',
      ],
    },
    {
      root: 'pages/waybill/',
      pages: [
        'index/index',
        'list/index',
        'order-detail-new/index',
        'subwaybill-list/index',
      ],
    },
    {
      root: 'pages/exception-address/',
      pages: [
        'index/index',
        'detail/index',
      ],
    },
    {
      root: 'pages/heavy-order/',
      pages: [
        'home/index',
        'order/index',
        'parcel/index',
        'value-added-services/index',
        'heavy-coupon/index',
        'order-results/index',
        'consignment-pickup/index',
        'consignment-delivery/index',
      ],
    },
    {
      root: 'pages/heavy-order-info/',
      pages: [
        'waybill-detail/index/index',
        'waybill-detail/detail/index',
        'order-detail/index',
        'waybill-list/index',
        'waybill-detail/weightImage/index',
        'subwaybill-list/index',
      ],
    },
    {
      root: 'pages/heavy-order-info-frd/',
      pages: [
        'waybill-detail/index/index',
        'waybill-detail/detail/index',
        'order-detail/index',
        'waybill-list/index',
      ],
    },
    {
      root: 'pages/acsp-address-book/',
      pages: [
        'list/index',
        'edit/index',
        'detail/index',
        'map/index',
      ],
    },
    {
      root: 'pages/article-info/',
      pages: [
        'index',
      ],
    },
    {
      root: 'pages/added-service/',
      pages: [
        'index',
        'on-time-contract/index',
      ],
    },
    {
      root: 'pages/coupon/',
      pages: [
        'index',
      ],
    },
    {
      root: 'pages/electronic-back-h5/',
      pages: [
        'index',
      ],
    },
    {
      root: 'pages/help-center/',
      pages: [
        'indexV1/index',
        'search/index',
      ],
    },
    {
      root: 'pages/demo/',
      pages: [
        'index/index',
        'components/Index/index',
        'components/Button/index',
        'components/Cell/index',
        'components/Cell/index',
        'components/SvgIcon/index',
        'components/Switch/index',
        'components/SearchBar/index',
        'components/Tag/index',
        'components/Empty/index',
        'components/Toast/index',
        'components/Dialog/index',
        'components/Popup/index',
        'components/Loading/index',
        'components/OrderAddress/index',
        'components/ExpressProductCard/index',
        'components/MonthlyCardSelector/index',
        'components/TimeSelect/index'
      ],
    },
  ],
  usingComponents: {
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '铁蛋超人',
    navigationBarTextStyle: 'black',
    backgroundColor: "#F4F4F4"
  },
});
