import block from 'bem-cn'
import React from 'react'
import './LoadingIndicator.css'

interface Props {
className?:string,
}

const b = block('loading-ind')

export const LoadingIndicator: React.FC<Props> = ({className}) => {
    return (
        <span className={b({}).mix(className)}></span>
    )
}