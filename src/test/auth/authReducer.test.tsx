import { authReducer, AuthAction } from '../../auth/authReducer';

describe('Tests in authReducer', () => {
    const action:AuthAction = {
        type: 'logout'        
    }
    test('Should return default state.', () => {
        const state = authReducer({ logged: false, name:null }, action);
        expect(state).toEqual({ logged: false, name:null });
    });
    test('Should autenticate and return the username.', () => {
        const action:AuthAction = {
            type: 'login',
            payload: { name: 'Susana' }
        }
        const state = authReducer({ logged: false, name:null }, action);
        expect(state).toEqual({ logged: true, name: 'Susana' });
    });
    test('Should delete the username and set logged to false.', () => {
        const action:AuthAction = {
            type: 'logout'            
        }
        const state = authReducer({ logged: true, name: 'Fermin' }, action);
        expect(state).toEqual({ logged: false, name: null });
    });
});