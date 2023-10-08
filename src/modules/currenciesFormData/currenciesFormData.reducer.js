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
        currenciesFormData: [...state.currenciesFormData, actions.payload]
      }
    case AUTOCOMPLETE_DATA:
      return {
        ...state,
        autocompleteRate: actions.payload && actions.payload.mid
      }
    default:
      return state
  }
}

export default reducer
