import React from 'react'
import { Router, Route } from 'react-router'

// const About = React.createClass({
//   render() {
//     return <h3>About</h3>
//   }
// })

const App = () => {
    return (
        <React.Fragment>
            {
                routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))
            }
        </React.Fragment>
    );
};
const Root = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default Root;