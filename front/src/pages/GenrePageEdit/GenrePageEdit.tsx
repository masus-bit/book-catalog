import block from 'bem-cn'
import React, { useMemo } from 'react'
import { GenreForm } from '../../components/Forms/GenreForm/GenreForm'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { useGenreGetById } from '../../hooks/useGenreGetById'
import { BasePageProps } from '../../types/base'
import './GenrePageEdit.css'

const b=block('genre-page-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const GenrePageEdit:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = useGenreGetById(id)
return(
    <div className={b()}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
        <GenreForm data={data} />
    </RefContainer>
    </div>
)
}