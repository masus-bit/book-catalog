import './PublisherAllPage.css'
import React, { ChangeEventHandler, useCallback } from 'react'
import block from 'bem-cn'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { BasePageProps } from '../../types/base'
import { usePublisherGetAll } from '../../hooks/usePublisherGetAll'
import { Input } from '../../components/Input/Input'
import { debounce } from 'lodash'
import { browserHistory } from '../../browserHistory'
import { Button } from '../../components/Button/Button'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'

const b = block('publisher-page')
interface Props extends BasePageProps {}

export const PublisherAllPage: React.FC<Props> = ({ match }) => {
  const { data, loading, setSearch } = usePublisherGetAll()

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setSearch(event.target.value)
    },
    [setSearch],
  )

  const debounceHandlerChange = useCallback(debounce(handlerChange, 300), [
    handlerChange,
  ])

  return (
    <div className={b({}).mix('all-page')}>
      <RefContainer
        leftElement={() => (
          <Input
            htmlType={'text'}
            label={'Поиск по имени'}
            onChange={debounceHandlerChange}
          />
        )}
        element={() => (
          <Button
            htmlType={'button'}
            text={'Создать'}
            onClick={() => browserHistory.push('/ref/publishers/create')}
          />
        )}
      >
        {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} mTop={'100px'} />}
        {!!data && <RefList match={match} data={data} title={'Издательства'} />}
      </RefContainer>
    </div>
  )
}
