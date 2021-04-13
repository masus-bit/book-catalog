import { useEffect, useState } from 'react'
import { apiAughorsGetAll } from '../api/authors'
import { Authors } from '../types/authors'
interface UseAuthorGetAll {
  data: Authors.Data[]
  loading: boolean
  setSearch: (search: string) => void
}

export const useAuthorGetAll = (
  defaultSearch: string = '',
): UseAuthorGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Authors.Data[]>([])
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Authors.All.Search = {}
    if (search) {
      params.search = search
    }
    setLoading(true)
    apiAughorsGetAll(params)
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
