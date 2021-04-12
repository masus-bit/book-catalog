import block from 'bem-cn'
import React, { useMemo } from 'react'
import { PublisherForm } from '../../components/Forms/PublisherForm/PublisherForm'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { usePublisherGetById } from '../../hooks/usePublisherGetById'
import { BasePageProps } from '../../types/base'

const b=block('publisher-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const PublisherEditPage:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = usePublisherGetById(id)
return(
    <div className={b({}).mix('edit-page')}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
    {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} />}
        <PublisherForm data={data} />
    </RefContainer>
    </div>
)
}