import block from 'bem-cn'
import React, { ReactNode } from 'react'
import { BaseComponentProps } from '../../types/base'
import './RefContainer.css'

interface Props extends BaseComponentProps {
  title?: string
  element?: () => ReactNode
  leftElement?: () => ReactNode
}

const b = block('ref-container')

export const RefContainer: React.FC<Props> = ({
  children,
  title,
  element,
  leftElement,
}) => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>{title}</h2>
      {!!leftElement && leftElement()}
      <div className={b('wrapper')}>{children}</div>
      {!!element && element()}
    </div>
  )
}
