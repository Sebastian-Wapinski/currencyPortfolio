import { createActionCurrencyAutocomplete } from './currenciesFormData.actions'

const url = 'http://api.nbp.pl/api/exchangerates/rates/a'

const _createDayBeforeDate = (purchaseDate) => {
  const date = new Date(purchaseDate)
  const newDate = date.setDate(date.getDate() - 1)
  const newPurchaseDateFull = new Date(newDate)
  const year = newPurchaseDateFull.getFullYear()
  const month = (newPurchaseDateFull.getMonth() + 1).toString().padStart(2, '0')
  const day = (newPurchaseDateFull.getDate()).toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const getCurrencyAutocomplete = (purchaseDate, currencyType) => (dispatch, getState) => {
  return fetch(`${url}/${currencyType}/${purchaseDate}`)
    .then(resp => {
      if (resp.status === 404) {
        console.warn('EXCHANGE CLOSED THAT DAY - PRICE FROM FIRST ACTIVE DAY')
        const dayBeforeDate = _createDayBeforeDate(purchaseDate)
        dispatch(getCurrencyAutocomplete(dayBeforeDate, currencyType))
      }
      if (resp.ok) {
        return resp.json()
      }
      throw new Error('Network Error')
    })
    .then(resp => {
      dispatch(createActionCurrencyAutocomplete(resp))
      return resp
    })
    .catch(err => {
      console.error(err)
      return err
    })
}
