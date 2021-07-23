import { useContext } from "react";
import { HashRouter , Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "../routers/DashboardRoutes";
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const { user } = useContext<any>(AuthContext);
    return (
        <HashRouter>
            <div>
                <Switch>
                    <PublicRoute path="/login" component={LoginScreen} isAuthenticated={user.logged} />
                    <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
                </Switch>
            </div>
        </HashRouter>
    );
}
