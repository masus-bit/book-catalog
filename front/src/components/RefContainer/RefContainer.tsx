import block from 'bem-cn'
import React, { ReactNode } from 'react'
import './RefContainer.css'

interface Props {
  title?: string
  element?: () => ReactNode
}

const b = block('ref-container')

export const RefContainer: React.FC<Props> = ({ children, title, element }) => {
  return (
    <React.Fragment>
      <h2 className={b('title')}>{title}</h2>
      <div className={b()}>{children}</div>
    </React.Fragment>
  )
}
