import React from 'react'
import { CurrenciesFormData } from './modules/currenciesFormData'
import { ExchangeRatesArr } from './modules/exchangeRatesArr'

import { StyledApp, StyledLayout } from './App.styled'

const App = () => {
  return (
    <StyledApp>
      <StyledLayout>
        <CurrenciesFormData />
        <ExchangeRatesArr />
      </StyledLayout>
    </StyledApp>
  )
}

export default App
