import Home from '../modules/home';


const createComponent = component => props => <Bundle load={component}>{Component => (Component ? <Component {...props} /> : <Loading />)}</Bundle>;


const routes = [
    {
        path: '/home',
        component: createComponent(Home)
    },
    {
        path: '/page',
        component: () => import('../modules/page')
    },
];

export default routes;
