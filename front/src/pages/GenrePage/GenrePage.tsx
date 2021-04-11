import './GenrePage.css'
import React, { ChangeEventHandler, useCallback } from 'react'
import block from 'bem-cn'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { RefList } from '../../components/RefList/RefList'
import { BasePageProps } from '../../types/base'
import { useGenreGetAll } from '../../hooks/useGenreGetAll'
import { Button } from '../../components/Button/Button'
import { browserHistory } from '../../browserHistory'

const b = block('genre-page')
interface Props extends BasePageProps {}

export const GenrePage: React.FC<Props> = ({match}) => {
  const { data, loading } = useGenreGetAll();

  // const handlerChange=useCallback<ChangeEventHandler<HTMLInputElement>>(event=>{
  //   setSearch(event.target.value)},[setSearch])

  //   const debounceHandlerChange=useCallback(debounce(handlerChange,500),[handlerChange])

  return (
    <div className={b()}>
      <RefContainer element={()=><Button htmlType={'button'} text={'Создать'} onClick={()=>browserHistory.push('/ref/genres/create')} />}>
        
        {data.length > 0 && !loading ? <RefList data={data} match={match} title={"Жанры"} /> : <p>Ничего не найдено</p>}
    
      </RefContainer>
    </div>
  );
}
