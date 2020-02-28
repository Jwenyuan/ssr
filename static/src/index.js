import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/router';


if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
);