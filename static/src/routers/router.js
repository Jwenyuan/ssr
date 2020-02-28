import React from 'react';
import { Router, Route } from 'react-router';
import routers from './routers';
import Home from '../modules/home';
import { createBrowserHistory } from 'history';

const App = () => {
    return <Router history={createBrowserHistory()} forceRefresh={true}>
        <div>aedwe</div>
        {
            routers.map((item, index) => {
                console.log(item);
                return <Route key={index} path={item.path} exact component={item.component}></Route>
            })
        }
    </Router>
}

export default App;