import block from 'bem-cn'
import React, { useState } from 'react'
import './RefList.css'
import { BaseComponentProps } from '../../types/base'
import { match } from 'react-router'
import { Link } from 'react-router-dom'
import { browserHistory } from '../../browserHistory'
import { Button } from '../Button/Button'
import { ButtonType } from '../Button/ButtonType'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'

interface Props extends BaseComponentProps {
  data: Array<any>
  title: string
  match: match<{}>
  deleteRequest?: (id: number) => Promise<void>
}

const b = block('ref-list')

export const RefList: React.FC<Props> = ({
  data,
  title,
  match,
  deleteRequest,
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const onDeleteClick = async (id: number) => {
    try {
      setLoading(true)

      deleteRequest && await deleteRequest(id)
      browserHistory.go(0)
    } catch (err) {
      setErrorText(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className={b()}>
      <h2 className={b('title')}>{title}</h2>
      <ul className={b('list')}>
        <li className={b('ref-item-title')}>
          <span className={b('name-name').mix('name')}>Название</span>
        </li>
        {data.map((it) => {
          return (
            <li className={b('ref-item')} key={it.id}>
              <Link
                to={`${match !== undefined ? match.url : null}/${it.id}`}
                className={b('name')}
              >
                {it.name}
              </Link>
              <Button  htmlType={'button'} text={'Удалить'} onClick={()=>onDeleteClick(it.id)} type={ButtonType.Monochrome} className={'delete'}> 
              {!!loading&&<LoadingIndicator />}
              </Button>
              {errorText&&errorText}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
