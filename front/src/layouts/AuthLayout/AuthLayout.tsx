import block from 'bem-cn'
import React from 'react'
import { Header } from '../../components/Header/Header'
import { BaseLayoutProps } from '../../types/base'
import './AuthLayout.css'

interface Props extends BaseLayoutProps{
}

const b = block('auth-layout')

export const AuthLayout: React.FC<Props> = (props) => {
  return (
    <div className={b()}>
      <Header />
      <main className={b('main')}>
        {props.children}
      </main>
    </div>
  )
}
