import React, {LazyExoticComponent} from "react";

const Home = React.lazy(() => import('./views/Home'));
const Test = React.lazy(() => import('./views/Test'));
const JsonView = React.lazy(() => import('./views/JsonView'));
const UrlStrToObj = React.lazy(() => import('./views/UrlStrToObj'));
const ObjectToStr = React.lazy(() => import('./views/ObjectToStr'));
const Range = React.lazy(() => import('./views/Range'));
const Selection = React.lazy(() => import('./views/Selection'));
const GetDerivedStateFromProps = React.lazy(() => import('./views/GetDerivedStateFromProps'));

interface RouteType {
    path: string;
    title: string;
    component: LazyExoticComponent<any>;
    children?: RouteType[];
    to?: string;
}

const routes: RouteType[] = [
    {
        path: '/',
        to: '/home',
        title: '主页',
        component: Home,
    },
    {
        path: '/home',
        title: '主页',
        component: Home,
    },
    {
        path: '/test',
        title: '测试',
        component: Test,
    },
    {
        path: '/jsonview',
        title: 'json 解析工具',
        component: JsonView
    },
    {
        path: '/strtobj',
        title: 'url 查询字符串解析成对象',
        component: UrlStrToObj
    },
    {
        path: '/objtostr',
        title: 'obejct 对象转换成查询字符串',
        component: ObjectToStr
    },
    {
        path: '/range',
        title: 'Range 对象示例',
        component: Range
    },
    {
        path: '/selection',
        title: 'Selection 对象示例',
        component: Selection
    },
    {
        path: '/getDerivedStateFromProps',
        title: 'GetDerivedStateFromProps',
        component: GetDerivedStateFromProps
    },
];

export default routes;