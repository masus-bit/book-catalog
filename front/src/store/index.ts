import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import { PersistConfig } from 'redux-persist/es/types'
import storage from 'redux-persist/lib/storage'
import { RootState } from "./types";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const config: PersistConfig<RootState.State> ={
    key: 'catalog',
    storage
}

const persistedReducer = persistReducer(config,rootReducer)
export const store = createStore(persistedReducer,compose(
    applyMiddleware(thunk),
    window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
export const persistor = persistStore(store)