import block from 'bem-cn'
import React from 'react'
import { Link } from 'react-router-dom'
import './RefItem.css'
interface Props {
  item: Record<string, string>
}

const b = block('ref-item')

export const RefItem: React.FC<Props> = ({ item }) => {
  return (
    <li className={b()}>
      <Link to={`/ref/languages/${item.id}`} className={b('name')}>{item.name}</Link>
    </li>
  )
}
