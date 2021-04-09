import block from 'bem-cn'
import React, { ReactNode } from 'react'
import { BaseComponentProps } from '../../types/base'
import './RefContainer.css'

interface Props extends BaseComponentProps {
  title?: string
  element?: () => ReactNode
}

const b = block('ref-container')

export const RefContainer: React.FC<Props> = ({ children, title, element }) => {
  return (
    <React.Fragment>
      <h2 className={b('title')}>{title}</h2>
      <div className={b()}>{children}</div>
      {!!element && element()}
    </React.Fragment>
  )
}
