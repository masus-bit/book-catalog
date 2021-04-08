import { ApiService } from '../services/ApiService'
import { Publishers } from '../types/publishers'

export const apiPublishersGetAll = async (): Promise<Publishers.Data[]> => {
  const { data } = await ApiService(true).get<Publishers.Data[]>(`/publishers`)
  return data
}
