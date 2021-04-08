import './GenrePage.css'
import React, { useEffect, useState } from 'react'
import block from 'bem-cn'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { apiGenresGetAll } from '../../api/genres'
import { Genres } from '../../types/genres'

const b = block('genre-page')
interface Props {}

export const GenrePage: React.FC<Props> = () => {
  const [data, setData] = useState<Genres.Data[]>([])

  useEffect(() => {
    const loadData = async () => {
      let data = await apiGenresGetAll()
      setData(data)
    }
    loadData()
  }, [])
  return (
    <div className={b()}>
      <RefContainer>
        {!!data && <RefList data={data} title={'Жанры'} />}
      </RefContainer>
    </div>
  )
}
