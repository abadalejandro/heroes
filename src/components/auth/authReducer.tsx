import { types } from "../types/types";

// interface state {
//     name:string,
//     logged:boolean,
// }

// const initialState:state = {
//     name: 'Alejandro',
//     logged: true,
// }

export const authReducer = (state = {}, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                ...state,
                logged: false
            }



        default:
            return state;
    }
}