import { types } from "../types/types";

export interface IAuth {
    name:string,
    logged:boolean,    
  }


export interface IAction {
  type:string,
  payload:any
} 




export const authReducer = (state:IAuth, action:IAction) => {
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