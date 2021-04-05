import block from 'bem-cn'
import React from 'react'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'

interface Props{}
const b= block('register-page')
export const RegisterPage:React.FC<Props>=()=>{
    return(
        <div className={b()}>
            <RegistrationForm />
        </div>
    )
}