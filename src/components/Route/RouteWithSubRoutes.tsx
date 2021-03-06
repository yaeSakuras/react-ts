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

const RouteRender = (route:RouteType) => {
    const {path, title, children = [], to = ''} = route;
    if (path === "/") {
        return (
            <Route path="/" exact render={() => (
                <Redirect to={to}/>
            )}/>
        )
    } else {
        return (
            <Route path={path} render={props => {
                document.title = title ? title : 'yaeSakura';
                return <route.component {...props} routes={children}/>
            }}/>
        )
    }
};

const RouteWithSubRoutes = (props:Iprops) => {
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