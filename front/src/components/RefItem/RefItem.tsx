import block from 'bem-cn'
import React from 'react'
import './RefItem.css'
interface Props {
  item: Record<string, string>
}

const b = block('ref-item')

export const RefItem: React.FC<Props> = ({ item }) => {
  return (
    <li className={b()}>
      <span className={b('id')}>{item.id}</span>
      <span className={b('name')}>{item.name}</span>
    </li>
  )
}
