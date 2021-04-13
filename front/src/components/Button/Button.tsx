import './Button.css'
import React, { MouseEventHandler } from 'react'
import block from 'bem-cn'
import { emptyFunc } from '../../utils'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'
import { BaseComponentProps } from '../../types/base'
import { ButtonType } from './ButtonType'

interface Props extends BaseComponentProps {
  text: string
  htmlType?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  loading?: boolean
  type:ButtonType
}

const b = block('button')

export const Button: React.FC<Props> = ({
  htmlType,
  text,
  onClick = emptyFunc,
  className,
  loading = false,
  type=ButtonType.Colorful
}) => (
  <button onClick={onClick} type={htmlType} className={b({[type]:true}).mix(className)}>
    {' '}
    {loading && <LoadingIndicator className={loading ? 'spin' : ''} />} {text}{' '}
  </button>
)
