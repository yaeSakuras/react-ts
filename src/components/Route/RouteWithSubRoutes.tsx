import React from "react";
import { Route,Redirect } from "react-router-dom";

interface Iprops {
    routes:Array<any>
}

const RouteRender = (route:any) => {
    const {path, children = []} = route;
    if (path === "/") {
        return (
            <Route path="/" exact render={() => (
                <Redirect to={route.to}/>
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