import block from 'bem-cn'
import React, { useMemo } from 'react'
import { GenreForm } from '../../components/Forms/GenreForm/GenreForm'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { useGenreGetById } from '../../hooks/useGenreGetById'
import { BasePageProps } from '../../types/base'
import './GenreEditPage.css'

const b=block('genre-page-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const GenreEditPage:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = useGenreGetById(id)
return(
    <div className={b({}).mix('edit-page')}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
    {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} />}
        <GenreForm data={data} />
    </RefContainer>
    </div>
)
}