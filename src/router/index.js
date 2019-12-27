import { importPath } from '../util/loadable.js';
/**
 * webpackChunkName 为需要按模块切割的名称
 */
const routers = [
  {
    path: '/',
    component: importPath({
      loader: () =>
        import('../pages/Home/index.js')
    }),
    name: '首页',
    icon: ''
  },
  // {
  //   path: '/home',
  //   component: importPath({
  //     loader: () =>
  //       import('../pages/Home/index.js')
  //   }),
  //   name: '首页',
  //   icon: ''
  // },
  {
    path: '/about',
    component: importPath({
      loader: () =>
        import('../pages/About/index.js')
    }),
    name: '关于',
    icon: ''
  },
  {
    path: '/product',
    component: importPath({
      loader: () =>
        import('../pages/Product/index.js')
    }),
    name: '产品',
    icon: ''
  },
  {
    path: '/unmatch',
    component: importPath({
      loader: () =>
        import('../pages/Unmatch/index.js')
    }),
    name: '产品',
    icon: ''
  },
  {
    name: '测试页面',
    path: '/demo',
    icon: 'minus-circle',
    childRouter: [
      {
        path: '/demo1',
        component: importPath({
          loader: () =>
            import(/* webpackChunkName: 'Counter' */ '../pages/Demo/demo1/index.js')
        }),
        name: 'Redux测试1',
        icon: 'minus-circle'
      },
      {
        path: '/demo2',
        component: importPath({
          loader: () =>
            import(/* webpackChunkName: 'Counter' */ '../pages/Demo/demo2/index.js')
        }),
        name: 'Redux测试2',
        icon: 'minus-circle'
      }
    ]
  },
];

export default routers;
