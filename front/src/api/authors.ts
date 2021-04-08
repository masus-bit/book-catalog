import { ApiService } from '../services/ApiService'
import { Authors } from '../types/authors'

export const apiAughorsGetAll = async (): Promise<Authors.Data[]> => {
  const { data } = await ApiService(true).get<Authors.Data[]>(`/authors`)
  return data
}
