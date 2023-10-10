import { ADD_ALL, AUTOCOMPLETE_DATA, SORT_BY_ID, UPDATE_CURRENCY_DATA } from './currenciesFormData.types'

export const createActionAddAllData = (data) => {
  return {
    type: ADD_ALL,
    payload: {
      currencyType: data.currencyType,
      amount: Number(data.amount),
      purchaseDate: data.purchaseDate,
      currencyPrice: Number(data.currencyPrice)
    }
  }
}

export const createActionCurrencyAutocomplete = (data) => {
  return {
    type: AUTOCOMPLETE_DATA,
    payload: data && data.rates[0]
  }
}

export const createActionSortData = (sortId) => {
  return {
    type: SORT_BY_ID,
    payload: sortId
  }
}

export const createActionUpdateCurrencyData = (id, currentCurrency, currentValue, profitLoss) => {
  return {
    type: UPDATE_CURRENCY_DATA,
    payload: {
      id,
      currentCurrency,
      currentValue: Number(currentValue),
      profitLoss: Number(profitLoss)
    }
  }
}
