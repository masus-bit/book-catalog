import block from 'bem-cn'
import React, { useCallback, useMemo } from 'react'
import { browserHistory } from '../../browserHistory'
import { Button } from '../../components/Button/Button'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { SingleItem } from '../../components/SingleItem/SingleItem'
import { useGenreGetById } from '../../hooks/useGenreGetById'
import { BasePageProps } from '../../types/base'
import './GenrePage.css'

interface Props extends BasePageProps<{ id: string }> {}

const b = block('genre-single-page')

export const GenrePage: React.FC<Props> = (props) => {
  const id = useMemo<number>(() => +props.match.params.id, [props.match])
  const { data, loading } = useGenreGetById(id)

  const button = useCallback(
    () =>
      data ? (
        <Button
          onClick={() => browserHistory.push(`/ref/genres/${data.id}/edit`)}
          htmlType={'button'}
          text={'Редактировать'}
        />
      ) : null,
    [data],
  )

  return (
    <div className={b({}).mix('single-page')}>
      <RefContainer title={data ? `${data.name}` : ''} element={button}>
        {loading && <LoadingIndicator size={'40px'} mLeft={'45%'}/>}
        {<SingleItem name={data ? data.name : 'Пусто'} />}
      </RefContainer>
    </div>
  )
}
