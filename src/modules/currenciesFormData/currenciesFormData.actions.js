import { ADD_ALL, ADD_CURRENCY } from './currenciesFormData.types'

export const createActionAddAllData = (data) => {
  return {
    type: ADD_ALL,
    payload: data
  }
}

export const createActionAddCurrency = (data) => {
  return {
    type: ADD_CURRENCY,
    payload: data.currencyType
  }
}
