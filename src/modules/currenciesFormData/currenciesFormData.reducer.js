import { ADD_ALL, ADD_CURRENCY } from './currenciesFormData.types'

const initialState = {
  currenciesFormData: [],
  symbolsArr: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ALL:
      return {
        ...state,
        currenciesFormData: [...state.currenciesFormData, actions.payload]
      }
    case ADD_CURRENCY:
      const newSymbolsArr = state.symbolsArr.find(currencyType => currencyType === actions.payload.toUpperCase())
      if (newSymbolsArr) {
        return state
      }

      return {
        ...state,
        symbolsArr: [...state.symbolsArr, actions.payload.toUpperCase()]
      }
    default:
      return state
  }
}

export default reducer
