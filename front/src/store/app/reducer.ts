import { Reducer } from "redux";
import { AppAction } from "./appAction";
import { AppState } from "./types";

const InitialState: AppState.State = {
    loading: false,
    accessToken: '',
    refreshToken: '',
    errorText: '',
    successRegText:'',
}

export const appReducer: Reducer<AppState.State, AppState.Action.All> = (state = InitialState, action) => {
    switch (action.type) {
        case AppAction.Fetch:
            return {
                ...state,
                errorText: '',
                loading: true
            }
        case AppAction.FetchSuccess:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.accessToken,
                loading: false
            }
        case AppAction.FetchError:
            return {
                ...state,
                loading: false,
                errorText: action.payload
            }
        case AppAction.RegSuccess:
            return{
                ...state,
                successRegText:action.payload,
                loading:false,
            }
        case AppAction.Logout:
            return{
                ...state,
                accessToken:'',
                refreshToken:'',
                loading:false,
            }
        default:
            return state
    }

}