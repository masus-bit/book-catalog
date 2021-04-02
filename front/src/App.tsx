import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './pages/Routes'
import { store } from './store'

interface Props {
}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <BrowserRouter >
      <Routes />
    </BrowserRouter>
  </Provider>
)
