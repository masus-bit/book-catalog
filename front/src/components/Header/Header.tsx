import block from 'bem-cn'
import React, { ReactNode } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
interface Props {
  rightBtn?:()=>ReactNode
}

const b = block('header')

export const Header: React.FC<Props> = ({rightBtn}) => (
  <header className={b()}>
    
    <Link className={b('title')}
      to={'/'}
    >
      Catalog
    </Link>
    {!!rightBtn && rightBtn()}
  </header>
)
