import React, {Suspense} from 'react';
import { HashRouter,Switch,Link } from "react-router-dom";

import RouteLoading from './components/Route/RouteLoading';
import RouteWithSubRoutes from './components/Route/RouteWithSubRoutes';
import routes from './routerConfig';

const App: React.FC = () => {
    return (
        <HashRouter>
            <ul>
                <li>
                    <Link to="/home">Tacos</Link>
                </li>
                <li>
                    <Link to="/jsonview">Sandwiches</Link>
                </li>
            </ul>
            <Suspense fallback={<RouteLoading />}>
                <Switch>
                    <RouteWithSubRoutes routes={routes}/>
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;
