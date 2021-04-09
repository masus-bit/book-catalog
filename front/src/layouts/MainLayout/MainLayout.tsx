import block from 'bem-cn'
import React, { useCallback } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { MainMenu } from '../../components/MainMenu/MainMenu'
import { appActions } from '../../store/app/actions'
import { AppState } from '../../store/app/types'
import { BaseLayoutProps } from '../../types/base'
import './MainLayout.css'


interface DispatchProps extends AppState.ActionThunk {

}
interface OwnProps extends BaseLayoutProps {
}
type Props = OwnProps & DispatchProps

const b = block('main-layout')

const MainLayoutPresenter: React.FC<Props> = ({children, appLogout}) => {
  const rightBtn=useCallback(()=><Button htmlType={'button'} text={'Выйти'} className={'logout'} onClick={()=>appLogout()} />,[])
  return (
    <div className={b()}>
      <Header rightBtn={rightBtn} />
      <MainMenu />
      <main className={b('main')}>
        {children}
      </main>
    </div>
  )
}

const mapDispatchToProps:MapDispatchToProps<DispatchProps,OwnProps>=({...appActions})

export const MainLayout=connect(null,mapDispatchToProps)(MainLayoutPresenter)