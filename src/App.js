import React from 'react'
import { CurrenciesFormData } from './modules/currenciesFormData'

import { StyledApp, StyledLayout } from './App.styled'

const App = () => {
  return (
    <StyledApp>
      <StyledLayout>
        <CurrenciesFormData />
      </StyledLayout>
    </StyledApp>
  )
}

export default App
