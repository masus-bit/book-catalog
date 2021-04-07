
import { ApiService } from '../services/ApiService'
import { App } from '../types/app'
import { Auth } from '../types/auth'

export const apiAutchLogin = async (params:Auth.Login.Params): Promise<App.Token> =>{
    const {data} = await ApiService(true).post<App.Token>('/auth/login', params)
    return data
}
export const apiAuthRefresh = async (params: Auth.Refresh.Params) : Promise<App.Token> =>{
    const {data} = await ApiService().post('/auth/refresh',params)
    return data
}

export const apiAuthLogout = async ():Promise<void> =>{
     await ApiService(true).post('/auth/logout')
    
}