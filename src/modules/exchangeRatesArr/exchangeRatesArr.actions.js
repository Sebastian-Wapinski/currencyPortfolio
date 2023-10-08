import { ADD_EXCHANGE_RATE } from './exchangeRatesArr.types'

export const createActionCurrentExchangeRate = (currencyData) => {
  return {
    type: ADD_EXCHANGE_RATE,
    payload: currencyData
  }
}
