import React from 'react'
import { CurrenciesFormData } from './modules/currenciesFormData'
import { ExchangeRatesArr } from './modules/exchangeRatesArr'

import { StyledApp, StyledLayout } from './App.styled'
import { CurrenciesSummary } from './modules/currenciesSummary'

const App = () => {
  return (
    <StyledApp>
      <StyledLayout>
        <CurrenciesFormData />
        <CurrenciesSummary />
        <ExchangeRatesArr />
      </StyledLayout>
    </StyledApp>
  )
}

export default App
