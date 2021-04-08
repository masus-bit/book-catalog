import './AuthorPage.css'
import React, { useEffect, useState } from 'react'
import block from 'bem-cn'
import { apiAughorsGetAll } from '../../api/authors'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { Authors } from '../../types/authors'

const b = block('author-page')
interface Props {}

export const AuthorPage: React.FC<Props> = () => {
  const [data, setData] = useState<Authors.Data[]>([])

  useEffect(() => {
    const loadData = async () => {
      let data = await apiAughorsGetAll()
      setData(data)
    }
    loadData()
  }, [])
  return (
    <div className={b()}>
      <RefContainer>
        {!!data && <RefList data={data} title={'Авторы'} />}
      </RefContainer>
    </div>
  )
}
