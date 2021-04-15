import { ApiService } from '../services/ApiService'
import { Publishers } from '../types/publishers'

export const apiPublishersGetAll = async (
  params: Publishers.All.Search,
): Promise<Publishers.Data[]> => {
  const { data } = await ApiService(true).get<Publishers.Data[]>(
    `/publishers`,
    { params },
  )
  return data
}
export const apiPublishersGetById = async (
  id: number,
): Promise<Publishers.Data> => {
  const { data } = await ApiService(true).get<Publishers.Data>(
    `/publishers/${id}`,
  )
  return data
}
export const apiPublishersCreate = async (
  params: Publishers.Create.Params,
): Promise<Publishers.Data> => {
  const { data } = await ApiService(true).post<Publishers.Data>(
    `/publishers`,
    params,
  )
  return data
}
export const apiPublishersUpdate = async (
  params: Publishers.Data,
): Promise<Publishers.Data> => {
  const { data } = await ApiService(true).put<Publishers.Data>(
    `/publishers/`,
    params,
  )
  return data
}
export const apiPublishersDelete = async (
  id: number,
): Promise<void> => {
  await ApiService(true).delete(`/publishers/${id}`)
}