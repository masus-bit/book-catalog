import './Button.css'
import React, { MouseEventHandler } from 'react'
import block from 'bem-cn'
import { emptyFunc } from '../../utils'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'

interface Props {
  text: string
  htmlType?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  loading?: boolean
}

const b = block('button')

export const Button: React.FC<Props> = ({
  htmlType,
  text,
  onClick = emptyFunc,
  className,
  loading = false,
}) => (
  <button onClick={onClick} type={htmlType} className={b({}).mix(className)}>
    {' '}
    {loading && <LoadingIndicator className={loading ? 'spin' : ''} />} {text}{' '}
  </button>
)
