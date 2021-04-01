import { apiAutchLogin } from "../../api/auth";
import { App } from "../../types/app";
import { AppAction } from "./appAction";
import { AppState } from "./types";

const appFetch = ():AppState.Action.Fetch =>({
    type:AppAction.Fetch
})
const appFetchError=(payload:string):AppState.Action.FetchError =>({
    type:AppAction.FetchError,
    payload
})
const appFetchSuccess=(payload:App.Token):AppState.Action.FetchSuccess=>({
    type:AppAction.FetchSuccess,
    payload
})

export const appActions: AppState.ActionThunk={
    appLogin:params=>async (dispatch) =>{
        dispatch(appFetch())

        try{
            const tokenPair=await apiAutchLogin(params)
            dispatch(appFetchSuccess(tokenPair))
        }
        catch (err){
            dispatch(appFetchError('Ошибка авторизации'))
        }
    }
}