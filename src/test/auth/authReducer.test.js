import { authReducer } from "../../auth/authReducer";

describe('Tests in authReducer', () => {
    test('Should return default state.', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });
    test('Should autenticate and return the username.', () => {
        const action = {
            type: 'login',
            payload: { name: 'Susana' }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'Susana' });
    });
    test('Should delete the username and set logged to false.', () => {
        const action = {
            type: 'logout'            
        }
        const state = authReducer({ logged: true, name: 'Fermin' }, action);
        expect(state).toEqual({ logged: false, name: null });
    });
});