import {  useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }: any) => {
    const {dispatch}  = useContext<any>(AuthContext);
   
    const handleLogin = (_e: React.FormEvent<EventTarget>) => {        
        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({ type: 'login', payload: { name: 'ale' } });
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Loginscreen</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}
