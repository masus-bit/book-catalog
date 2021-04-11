import './PublisherPage.css'
import React, { useEffect, useState } from 'react'
import block from 'bem-cn'
import { apiPublishersGetAll } from '../../api/publishers'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { Publishers } from '../../types/publishers'
import { BasePageProps } from '../../types/base'

const b = block('publisher-page')
interface Props extends BasePageProps {}

export const PublisherPage: React.FC<Props> = ({match}) => {
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
        {!!data && <RefList match={match} data={data} title={'Издательства'} />}
      </RefContainer>
    </div>
  )
}
