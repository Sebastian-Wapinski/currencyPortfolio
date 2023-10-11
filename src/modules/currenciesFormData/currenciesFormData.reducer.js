import { ADD_ALL, AUTOCOMPLETE_DATA, SORT_BY_ID, UPDATE_CURRENCY_DATA } from './currenciesFormData.types'

const initialState = {
  currenciesFormData: [],
  autocompleteRate: 0,
  idCreator: 1
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ALL:
      return {
        ...state,
        idCreator: state.idCreator + 1,
        currenciesFormData: state.currenciesFormData.concat({ ...actions.payload, id: state.idCreator })
      }
    case AUTOCOMPLETE_DATA:
      let actionsPayloadMid = actions.payload && (actions.payload.mid).toString().padEnd(6, '0')
      const createRightFormatForAutocomplete = () => Number((actions.payload.mid).toString().padEnd((actions.payload.mid).toString().length, '0')).toFixed(4)

      if (actions.payload && (actions.payload.mid).toString().length > 6) {
        actionsPayloadMid = actions.payload && createRightFormatForAutocomplete()
      }

      return {
        ...state,
        autocompleteRate: actions.payload && actionsPayloadMid
      }
    case SORT_BY_ID:
      const sortedData = [...state.currenciesFormData].sort((a, b) => {
        const valueA = a[actions.payload]
        const valueB = b[actions.payload]

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB)
        } else {
          return valueB - valueA
        }
      })

      return {
        ...state,
        currenciesFormData: sortedData
      }
    case UPDATE_CURRENCY_DATA:
      const updatedCurrenciesFormData = state.currenciesFormData.map((row) => {
        if (row.id !== actions.payload.id) {
          return row
        }

        return {
          ...row,
          currentRate: actions.payload.currentCurrency,
          currentValue: actions.payload.currentValue,
          profitLoss: actions.payload.profitLoss
        }
      })

      return {
        ...state,
        currenciesFormData: updatedCurrenciesFormData
      }
    default:
      return state
  }
}

export default reducer
