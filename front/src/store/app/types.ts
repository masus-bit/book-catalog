import { Action as ActionRedux } from 'redux'
import { App } from '../../types/app'
import { Auth } from '../../types/auth'
import { Thunk } from '../../types/base'
import { User } from '../../types/user'
import { AppAction } from './appAction'
export declare namespace AppState {
    interface State {
        readonly loading: boolean;
        readonly accessToken: string;
        readonly refreshToken: string;
        readonly errorText: string;
        readonly successRegText:string;
    }
    namespace Action {
        type Fetch = ActionRedux<AppAction.Fetch> & { payload?: undefined }
        type FetchSuccess = ActionRedux<AppAction.FetchSuccess> & { payload: App.Token }
        type FetchError = ActionRedux<AppAction.FetchError> & { payload: string }
        type RegisterSuccess = ActionRedux<AppAction.RegSuccess> & {payload: string}
        type All = Fetch | FetchSuccess | FetchError | RegisterSuccess
    }
    interface ActionThunk {
        appLogin: Thunk<Auth.Login.Params>
        appCreate:Thunk<User.Create.Params>
    }
}