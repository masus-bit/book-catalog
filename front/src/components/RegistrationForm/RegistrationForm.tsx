import block from 'bem-cn';
import React from 'react'
import { AppState } from '../../store/app/types';
import * as Yup from 'yup'
import { User } from '../../types/user';
interface StateProps{
    loading:boolean;
    errorText:string;
}
interface DispatchProps extends AppState.ActionThunk{}
interface OwnProps{}

type Props = OwnProps & StateProps & DispatchProps

const b = block('create-form')

const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape(({
    login: Yup.string().required(),
    password:Yup.string().required(),
    email: Yup.string().required(),
    passwordConfirm:Yup.string().required()
}))

const CreateUserForm: React.FC<Props> = ({loading,errorText,})=>{



}