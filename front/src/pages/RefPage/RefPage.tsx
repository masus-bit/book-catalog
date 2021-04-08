import './RefPage.css'
import React from 'react'
import block from 'bem-cn'
import { Link } from 'react-router-dom'

const b = block('ref-page')
interface Props {}

export const RefPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h3 className={b('title')}>Справочники</h3>
      <ul className={b('ref-list')}>
        <li className={b('ref-item')}>
          <Link to="/ref/authors" className={b('ref-link')}>
            {' '}
            Авторы
          </Link>
        </li>
        <li className={b('ref-item')}>
          <Link to="/ref/genres" className={b('ref-link')}>
            Жанры
          </Link>
        </li>
        <li className={b('ref-item')}>
          <Link to="/ref/languages" className={b('ref-link')}>
            Языки{' '}
          </Link>
        </li>
        <li className={b('ref-item')}>
          <Link to="/ref/publishers" className={b('ref-link')}>
            Издательства
          </Link>
        </li>
      </ul>
    </div>
  )
}
