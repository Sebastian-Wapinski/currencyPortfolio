import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { EXCHANGE_ARR_DATA_NAME } from './const'

import formDataReducer from './modules/currenciesFormData/currenciesFormData.reducer'
import exchangeRatesReducer from './modules/exchangeRatesArr/exchangeRatesArr.reducer'
import currenciesSummaryReducer from './modules/currenciesSummary/currenciesSummary.reducer'

const reducers = combineReducers({
  formData: formDataReducer,
  exchangeRates: exchangeRatesReducer,
  currenciesSummary: currenciesSummaryReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const preloadedState = JSON.parse(localStorage.getItem(EXCHANGE_ARR_DATA_NAME)) || undefined

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(EXCHANGE_ARR_DATA_NAME, JSON.stringify(state))
})
