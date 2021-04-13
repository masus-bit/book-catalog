import block from 'bem-cn'
import React, { useMemo } from 'react'
import { AuthorForm } from '../../components/Forms/AuthorForm/AuthorForm'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { useAuthorGetById } from '../../hooks/useAuthorGetById'
import { BasePageProps } from '../../types/base'

const b=block('author-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const AuthorEditPage:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = useAuthorGetById(id)
return(
    <div className={b({}).mix('edit-page')}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
    {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} />}
        <AuthorForm data={data} />
    </RefContainer>
    </div>
)
}