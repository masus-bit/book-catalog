import block from 'bem-cn'
import React from 'react'
import './RefList.css'
import { RefItem } from '../RefItem/RefItem'

interface Props {
  data: Array<any>
  title: string
}

const b = block('ref-list')

export const RefList: React.FC<Props> = ({ data, title }) => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>{title}</h2>
      <ul className={b('list')}>
        <li className={b('ref-item')}>
          <span className={b('name-name').mix('name')}>Название</span>
        </li>
        {data.map((it) => {
          return <RefItem item={it} key={it.id} />
        })}
      </ul>
    </div>
  )
}
