import { ApiService } from '../services/ApiService'
import { Genres } from '../types/genres'

export const apiGenresGetAll = async (): Promise<Genres.Data[]> => {
  const { data } = await ApiService(true).get<Genres.Data[]>(`/genres`)
  return data
}
export const apiGenresGetById = async (
  id: number,
): Promise<Genres.Data> => {
  const { data } = await ApiService(true).get<Genres.Data>(`/genres/${id}`)
  return data
}
export const apiGenresCreate = async (
  params: Genres.Create.Params,
): Promise<Genres.Data> => {
  const { data } = await ApiService(true).post<Genres.Data>(`/genres`, params)
  return data
}
export const apiGenresUpdate = async (
  params: Genres.Data,
): Promise<Genres.Data> => {
  const { data } = await ApiService(true).put<Genres.Data>(`/genres/`, params)
  return data
}
