export interface IAuthState {
    name: string | null,
    logged: boolean,
}

export const initialState: IAuthState = {
    name: 'Alex',
    logged: false,
}

type LoginPayload = {
    name: string | null;
}

export type AuthAction =
    | { type: 'login', payload: LoginPayload }
    | { type: 'logout' }



export const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case 'login':
            return {
                ...action.payload,
                logged: true
            };

        case 'logout':
            return {
                ...state,
                name: null,
                logged: false
            }

        default:
            return state;
    }
}