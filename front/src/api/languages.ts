import { ApiService } from '../services/ApiService'
import { Languages } from '../types/languages'

export const apiLanguagesGetAll = async (): Promise<Languages.Data[]> => {
  const { data } = await ApiService(true).get<Languages.Data[]>(`/languages`)
  return data
}
