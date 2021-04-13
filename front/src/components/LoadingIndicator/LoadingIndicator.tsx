import block from 'bem-cn'
import React, { CSSProperties, useMemo } from 'react'
import { BaseComponentProps } from '../../types/base'
import './LoadingIndicator.css'

interface Props extends BaseComponentProps {
  size?: number | string
  mTop?: number | string
  mLeft?: number | string
}

const b = block('loading-ind')

export const LoadingIndicator: React.FC<Props> = ({
  className,
  size,
  mTop,
  mLeft,
}) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
      marginTop: mTop,
      marginLeft: mLeft,
    }),
    [size],
  )
  return <span className={b({}).mix(className)} style={style}></span>
}
