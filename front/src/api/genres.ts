import { ApiService } from '../services/ApiService'
import { Genres } from '../types/genres'

export const apiGenresGetAll = async (): Promise<Genres.Data[]> => {
  const { data } = await ApiService(true).get<Genres.Data[]>(`/genres`)
  return data
}
