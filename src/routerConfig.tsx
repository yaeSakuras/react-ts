import React, {LazyExoticComponent} from "react";

const Home = React.lazy(() => import('./views/Home'));
const JsonView = React.lazy(() => import('./views/JsonView'));

interface RouteType {
    path: string;
    title: string;
    component: LazyExoticComponent<any>;
    children?: RouteType[];
    to?: string;
}

const routes: RouteType[] = [
    {
        path: '/home',
        title: '主页',
        component: Home,
    },
    {
        path: '/jsonview',
        title: 'json 解析工具',
        component: JsonView
    },
];

export default routes;