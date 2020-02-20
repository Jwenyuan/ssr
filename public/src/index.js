import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import getRouter from './router/router';

ReactDOM.render(
    getRouter(),
    document.getElementById('app')
);

if (module.hot) {
    // 实现热更新
    module.hot.accept();
  }