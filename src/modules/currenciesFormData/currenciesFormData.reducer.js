import { ADD } from './currenciesFormData.types'

const initialState = {
  currenciesFormData: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD:
      return {
        ...state,
        currenciesFormData: [...state.currenciesFormData, actions.payload]
      }
    default:
      return state
  }
}

export default reducer
