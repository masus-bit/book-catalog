import { apiAutchLogin } from "../../api/auth";
import { apiUserCreate } from "../../api/user";
import { App } from "../../types/app";
import { AppAction } from "./appAction";
import { AppState } from "./types";

const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch,
});
const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload,
});
const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload,
});
const appRegSuccess = (payload: string): AppState.Action.RegisterSuccess => ({
  type: AppAction.RegSuccess,
  payload,
});
export const appActions: AppState.ActionThunk = {
  appLogin: (params) => async (dispatch) => {
    dispatch(appFetch());

    try {
      const tokenPair = await apiAutchLogin(params);
      dispatch(appFetchSuccess(tokenPair));
      
    } catch (err) {
      dispatch(appFetchError("Ошибка авторизации"));
    }
  },
  appCreate: (params) => async (dispatch) => {

    try {
      await apiUserCreate(params);
      dispatch(appRegSuccess("Пользователь зарегистрирован успешно"));
    } catch (err) {
      dispatch(appFetchError("Ошибка регистрации"));
    }
  },
};
