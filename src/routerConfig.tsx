import React,{LazyExoticComponent} from "react";
const Home = React.lazy(()=> import('./views/Home'));
const JsonView = React.lazy(()=> import('./views/JsonView'));

export interface RouteType {
    path: string;
    component: LazyExoticComponent<any>;
    children?: RouteType[];
    to?:string;
}

const routes:RouteType[] = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/jsonview',
        component:JsonView
    },
];

export default routes;