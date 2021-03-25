import block from 'bem-cn'
import React from 'react'
import './MainMenu.css'

interface Props {
}

const b = block('main-menu')

export const MainMenu: React.FC<Props> = () => {
  return (
    <nav className={b()}>
      <a href="/catalog" className={b('link')}>Каталог</a>
      <a href="/ref" className={b('link')}>Справочники</a>
    </nav>
  )
}
