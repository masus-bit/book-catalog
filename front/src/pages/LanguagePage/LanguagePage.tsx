import './LanguagePage.css'
import React, { useEffect, useState } from 'react'
import block from 'bem-cn'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { apiLanguagesGetAll } from '../../api/languages'
import { Languages } from '../../types/languages'

const b = block('language-page')
interface Props {}

export const LanguagePage: React.FC<Props> = () => {
  const [data, setData] = useState<Languages.Data[]>([])

  useEffect(() => {
    const loadData = async () => {
      let data = await apiLanguagesGetAll()
      setData(data)
    }
    loadData()
  }, [])
  return (
    <div className={b()}>
      <RefContainer>
        {!!data && <RefList data={data} title={'Языки'} />}
      </RefContainer>
    </div>
  )
}
