import block from 'bem-cn'
import React, { useMemo } from 'react'
import { LanguageForm } from '../../components/Forms/LanguageForm/LanguageForm'
import { RefContainer } from '../../components/RefContainer/RefContainer'
import { useLanguageGetById } from '../../hooks/useLanguageGetById'
import { BasePageProps } from '../../types/base'
import './LanguagePageEdit.css'

const b=block('language-edit')

interface Props extends BasePageProps<{id?:string}>{

}

export const LanguagePageEdit:React.FC<Props>=({match})=>{
    const id= useMemo<number | undefined>(()=>match.params?.id ? +match.params.id : undefined, [match])
const {data, loading} = useLanguageGetById(id)
return(
    <div className={b()}>
    <RefContainer title={!!data?'Редактировать':'Создать'}>
        <LanguageForm data={data} />
    </RefContainer>
    </div>
)
}