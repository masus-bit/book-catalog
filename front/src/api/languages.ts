import { ApiService } from '../services/ApiService'
import { Languages } from '../types/languages'

export const apiLanguagesGetAll = async (): Promise<Languages.Data[]> => {
  const { data } = await ApiService(true).get<Languages.Data[]>(`/languages`)
  return data
}
export const apiLanguagesGetById = async (
  id: number,
): Promise<Languages.Data> => {
  const { data } = await ApiService(true).get<Languages.Data>(`/languages${id}`)
  return data
}
export const apiLanguagesCreate = async (
  params: Languages.Create.Params,
): Promise<Languages.Data> => {
  const { data } = await ApiService(true).post<Languages.Data>(`/languages`)
  return data
}
export const apiLanguagesUpdate = async (
  params: Languages.Data,
): Promise<Languages.Data> => {
  const { data } = await ApiService(true).put<Languages.Data>(`/languages`)
  return data
}
