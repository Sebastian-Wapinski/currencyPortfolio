import { ADD_EXCHANGE_RATE } from './exchangeRatesArr.types'

const initialState = {
  currencyRates: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_EXCHANGE_RATE:
      return {
        ...state,
        currencyRates: [...actions.payload[0].rates]
      }
    default:
      return state
  }
}

export default reducer
