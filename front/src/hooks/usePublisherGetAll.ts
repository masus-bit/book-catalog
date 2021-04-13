import { useEffect, useState } from 'react'
import { apiPublishersGetAll } from '../api/publishers'
import { Publishers } from '../types/publishers'
interface UsePublisherGetAll {
  data: Publishers.Data[]
  loading: boolean
  setSearch: (search: string) => void
}

export const usePublisherGetAll = (
  defaultSearch: string = '',
): UsePublisherGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Publishers.Data[]>([])
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Publishers.All.Search = {}
    if (search) {
      params.search = search
    }
    setLoading(true)
    apiPublishersGetAll(params)
      .then(setData)
      .catch((err) => {
        console.error(err)
        setData([])
      })
      .then(() => setLoading(false))
  }, [search])
  return {
    data,
    loading,
    setSearch,
  }
}
