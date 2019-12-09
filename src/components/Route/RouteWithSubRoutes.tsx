import React, {LazyExoticComponent} from "react";
import {Route, Redirect} from "react-router-dom";


interface RouteType {
    path: string;
    title: string;
    component: LazyExoticComponent<any>;
    children?: RouteType[];
    to?: string;
}

interface Iprops {
    routes: RouteType[]
}

const RouteRender: React.FC<RouteType> = route => {
    const {path,title, children = [], to = ''} = route;
    document.title = title ? title : 'yaeSakura';
    if (path === "/") {
        return (
            <Route path="/" exact render={() => (
                <Redirect to={to}/>
            )}/>
        )
    } else {
        return (
            <Route path={path} render={props => (
                <route.component {...props} routes={children}/>
            )}/>
        )
    }
};

const RouteWithSubRoutes: React.FC<Iprops> = props => {
    const {routes} = props;
    return (
        <>
            {
                routes.map((route, i) => <RouteRender key={i} {...route}/>)
            }
        </>
    )
};

export default RouteWithSubRoutes;