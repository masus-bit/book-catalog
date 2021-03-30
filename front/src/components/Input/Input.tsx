import './Input.css'
import block from 'bem-cn'
import React from 'react'

interface Props{
required?:Boolean,
placeholder?: string,
type: string,
mixClass:string
}

const b=block('input')

export const Input:React.FC<Props>=({required=false,placeholder, type, mixClass})=>{
    return(
        <input required placeholder={placeholder} type={type} className={b()+` ` +mixClass} />
    )
}