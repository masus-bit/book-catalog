import { ApiService } from '../services/ApiService'
import { Authors } from '../types/authors'

export const apiAughorsGetAll = async (params?:Authors.All.Search): Promise<Authors.Data[]> => {
  const { data } = await ApiService(true).get<Authors.Data[]>(`/authors`, {params})
  return data
}
export const apiAuthorsGetById = async (
  id: number,
): Promise<Authors.Data> => {
  const { data } = await ApiService(true).get<Authors.Data>(`/authors/${id}`)
  return data
}
export const apiAuthorsCreate = async (
  params: Authors.Create.Params,
): Promise<Authors.Data> => {
  const { data } = await ApiService(true).post<Authors.Data>(`/authors`, params)
  return data
}
export const apiAuthorsUpdate = async (
  params: Authors.Data,
): Promise<Authors.Data> => {
  const { data } = await ApiService(true).put<Authors.Data>(`/authors/`, params)
  return data
}
export const apiAuthorsDelete = async (
  id: number,
): Promise<void> => {
  await ApiService(true).delete(`/authors/${id}`)
}