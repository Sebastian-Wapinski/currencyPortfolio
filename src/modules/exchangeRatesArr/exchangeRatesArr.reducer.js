import { ADD_EXCHANGE_RATE } from './exchangeRatesArr.types'

const initialState = {
  currencyRates: []
}

const _createCurrencyRatesToFixed4 = (actions) => {
  return actions.payload[0].rates.map((currency) => {
    return { ...currency, mid: currency.mid.toFixed(4) }
  })
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_EXCHANGE_RATE:
      const currencyRatesToFixed4 = _createCurrencyRatesToFixed4(actions)
      return {
        ...state,
        currencyRates: currencyRatesToFixed4
      }
    default:
      return state
  }
}

export default reducer
