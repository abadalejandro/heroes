import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


// interface IProps {
//     isAuthenticated: boolean;
//     component: JSX.Element;
  
// }

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }: any) => {
    return (
        <Route {...rest}
            component={(props: any) => (
                (isAuthenticated)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
        />
    )
}

PrivateRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}




