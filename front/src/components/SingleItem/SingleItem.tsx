import block from 'bem-cn';
import React from 'react'
import { BaseComponentProps } from '../../types/base';
import './SingleItem.css'

interface Props extends BaseComponentProps{
name:string
}

const b=block('single-item')

export const SingleItem:React.FC<Props>=({name})=>{
    return(
        <div className={b()}>
            <span className={b('name')}>
        {name}
            </span>
        </div>
    )
}