import block from 'bem-cn'
import React from 'react'
import './RefContainer.css'

interface Props {}

const b = block('ref-container')

export const RefContainer: React.FC<Props> = ({ children }) => {
  return <div className={b()}>{children}</div>
}
