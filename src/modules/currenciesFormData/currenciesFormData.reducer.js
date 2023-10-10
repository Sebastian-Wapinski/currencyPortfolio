import { ADD_ALL, AUTOCOMPLETE_DATA } from './currenciesFormData.types'

const initialState = {
  currenciesFormData: [],
  autocompleteRate: 0
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ALL:
      return {
        ...state,
        currenciesFormData: state.currenciesFormData.concat(actions.payload)
      }
    case AUTOCOMPLETE_DATA:
      let actionsPayloadMid = actions.payload && (actions.payload.mid).toString().padEnd(6, '0')

      if (actions.payload && (actions.payload.mid).toString().length > 6) {
        actionsPayloadMid = actions.payload && (actions.payload.mid).toString().padEnd((actions.payload.mid).toString().length, '0')
      }

      return {
        ...state,
        autocompleteRate: actions.payload && actionsPayloadMid
      }
    default:
      return state
  }
}

export default reducer
