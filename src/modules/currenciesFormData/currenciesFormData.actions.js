import { ADD_ALL, AUTOCOMPLETE_DATA } from './currenciesFormData.types'

export const createActionAddAllData = (data) => {
  return {
    type: ADD_ALL,
    payload: data
  }
}

export const createActionCurrencyAutocomplete = (data) => {
  return {
    type: AUTOCOMPLETE_DATA,
    payload: data && data.rates[0]
  }
}
