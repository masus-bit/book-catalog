import block from 'bem-cn'
import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { appActions } from '../../store/app/actions'
import { AppState } from '../../store/app/types'
import { RootState } from '../../store/types'
import { checkAccessToken } from '../../utils'
import { Button } from '../Button/Button'
import './Header.css'

interface StateProps {
  errorText: string;

  isAuth: boolean
}
interface DispatchProps extends AppState.ActionThunk {

}
interface OwnProps {
}
type Props = OwnProps & StateProps & DispatchProps

const b = block('header')

export const HeaderPresenter: React.FC<Props> = ({ errorText, appLogout, isAuth }) => (
  <header className={b()}>
    <a className={b('title')}
      href={'/'}
    >
      Catalog
    </a>
    {!!errorText && alert('Ошибка http')}
    {!!isAuth && <Button htmlType={'button'} text={'Выйти'} className={'logout'} onClick={() => appLogout()} />}
  </header>
)
const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => {
  return {
    errorText: app.errorText,
    isAuth: checkAccessToken(app.accessToken)
  }
}
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({ ...appActions })
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderPresenter)