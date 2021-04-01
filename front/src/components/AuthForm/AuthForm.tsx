import React, { MouseEventHandler } from 'react'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import './AuthForm.css'
import { AppState } from '../../store/app/types'
import block from 'bem-cn'
import { Auth } from '../../types/auth'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
interface StateProps {
    loading: boolean;
    errorText: string;

}
interface DispatchProps extends AppState.ActionThunk { }
interface OwnProps { }

type Props = OwnProps & StateProps & DispatchProps
const b = block('auth-form')

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape(({
    login: Yup.string().required(),
    password: Yup.string().required()
}))

const AuthFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
    const { errors, values, submitForm, handlerChange } = useFormik<Auth.Login.Params>({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: async (fields) => {
            await appLogin(fields)
        }
    })

    const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        submitForm().catch()
    }
    return (
        <form className={b()} action="">
            <h2 className={b('title')}>Авторизация</h2>
            <Input onChange={handlerChange}  required={true} className={b('field')} placeholder={'login'} htmlType={'text'}  />
            <Input required={true} placeholder={'password'} htmlType={'password'}  />
            <Button htmlType={"submit"} text={'Войти'} />
        </form>
    )
}
