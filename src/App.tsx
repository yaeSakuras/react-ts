import React, {Suspense} from 'react';
import { HashRouter,Switch } from "react-router-dom";

import RouteLoading from './components/Route/RouteLoading';
import RouteWithSubRoutes from './components/Route/RouteWithSubRoutes';
import routes from './routerConfig';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <RouteWithSubRoutes routes={routes}/>
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;
