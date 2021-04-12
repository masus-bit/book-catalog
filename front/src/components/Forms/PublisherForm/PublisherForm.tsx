import React, { MouseEventHandler, useState } from 'react'
import block from 'bem-cn'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { browserHistory } from '../../../browserHistory'
import { BaseComponentProps } from '../../../types/base'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { Publishers } from '../../../types/publishers'
import { apiPublishersCreate, apiPublishersUpdate } from '../../../api/publishers'

interface Props extends BaseComponentProps {
  data: Publishers.Data | null;
}

const b = block('publisher-form')

const schema: Yup.SchemaOf<Publishers.Create.Params> = Yup.object().shape(({
  name: Yup.string().required('Обязательное')
}))

export const PublisherForm: React.FC<Props> = ({ className = '', data }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const { errors, values, submitForm, handleChange } = useFormik<Publishers.Create.Params>({
    initialValues: {
      name: data?.name??''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
        let id: number
        setLoading(true)
        if (data) {
          id = data.id
          
          await apiPublishersUpdate({ ...data, ...fields })
        } else {
          const res = await apiPublishersCreate(fields)
          id = res.id
        }
        browserHistory.push(`/ref/publishers/${id}`)
      } catch (err) {
        setErrorText(err.message)
      } finally {
        setLoading(false)
      }
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b({}).mix(className)}>
      <Input
      htmlType={'text'}
        className={b('field')}
        label={'Издательство'}
        name={'name'}
        value={values.name}
        onChange={handleChange}
        error={errors?.name}
        disabled={loading}
      />
      {!errorText && (
        <p className={b('error')}>
          {errorText}
        </p>
      )}
      <div className={b('buttons')}>
        <Button
        text={!!data ? 'Сохранить' : 'Создать'}
          onClick={handlerSubmit}
          loading={loading}
        />
       
      </div>
    </form>
  )
}