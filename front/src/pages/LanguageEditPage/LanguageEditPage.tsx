import block from 'bem-cn'
import React, { useMemo } from 'react'
import { LanguageForm } from '../../components/Forms/LanguageForm/LanguageForm'
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { useLanguageGetById } from '../../hooks/useLanguageGetById'
import { BasePageProps } from '../../types/base'
import './LanguageEditPage.css'

const b=block('language-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const LanguageEditPage:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = useLanguageGetById(id)
return(
    <div className={b({}).mix('edit-page')}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
    {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} />}
        <LanguageForm data={data} />
    </RefContainer>
    </div>
)
}