import { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

const init = () => {

  const user:any = localStorage.getItem('user');

  return JSON.parse(user) || { logged: false };
}

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{user, dispatch}} >
      <AppRouter />
    </AuthContext.Provider>
  )
}
