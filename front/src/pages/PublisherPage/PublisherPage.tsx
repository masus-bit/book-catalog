import './PublisherPage.css'
import React, { useEffect, useState } from 'react'
import block from 'bem-cn'
import { apiPublishersGetAll } from '../../api/publishers'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { Publishers } from '../../types/publishers'

const b = block('publisher-page')
interface Props {}

export const PublisherPage: React.FC<Props> = () => {
  const [data, setData] = useState<Publishers.Data[]>([])

  useEffect(() => {
    const loadData = async () => {
      let data = await apiPublishersGetAll()
      setData(data)
    }
    loadData()
  }, [])
  return (
    <div className={b()}>
      <RefContainer>
        {!!data && <RefList data={data} title={'Издательства'} />}
      </RefContainer>
    </div>
  )
}
