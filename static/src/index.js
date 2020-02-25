import 'babel-polyfill';
import React from 'react';
import App from './routers/router';

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

ReactRouter.run(React.render(<App />, document.body));
