import '@babel/polyfill'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
// import { Layout, Menu } from 'antd';
// import Home from "./pages/Home/index";
// import Count from "./pages/Count/index";
import BasicLayout from "./layouts/BasicLayout/index"
import { AppContainer } from "react-hot-loader";

import './index.scss'
// import Router from "./router";
import $ from 'jquery';
// import { add } from './math.js'
// const logger = createLogger();
// add(66)
/*初始化*/
// renderWithHotReload(Router);

/*热更新*/
// if (module.hot) {
//     module.hot.accept("./router/index.js", () => {
//         const Router = require("./router/index.js").default;
//         renderWithHotReload(Router);
//     });
// }
// $(function () {
//     console.log('在下张不怂，正在测试jquery');
// })
// function renderWithHotReload(Router) {
//     ReactDOM.render(
//         <AppContainer>
//             <BrowserRouter>
//                 <Router />
//             </BrowserRouter>
//         </AppContainer>,
//         document.getElementById("root")
//     );
// }

// 判断该浏览器支不支持 serviceWorker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//             .register('/service-worker.js')
//             .then(registration => {
//                 console.log('service-worker registed')
//             })
//             .catch(error => {
//                 console.log('service-worker registed error')
//             })
//     })
// }
const logger = createLogger();
const store = createStore(
    // reducer,
    applyMiddleware(promise, logger)
);
class App extends React.Component {
    render() {
      return <BasicLayout />;
    }
  }
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
);
