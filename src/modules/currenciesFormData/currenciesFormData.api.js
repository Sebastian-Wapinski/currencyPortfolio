import { createActionCurrencyAutocomplete } from './currenciesFormData.actions'

const url = 'http://api.nbp.pl/api/exchangerates/rates/a'

// const exchangeClosed = {
//   rates: [{
//     mid: 'EXCHANGE CLOSED'
//   }]
// }

export const getCurrencyAutocomplete = (purchaseDate, currencyType) => (dispatch, getState) => {
  return fetch(`${url}/${currencyType}/${purchaseDate}`)
    .then(resp => {
      if (resp.status === 404) {
        const date = new Date(purchaseDate)
        const newDate = date.setDate(date.getDate() - 1)
        const newPurchaseDateFull = new Date(newDate)
        const year = newPurchaseDateFull.getFullYear()
        const month = (newPurchaseDateFull.getMonth() + 1).toString().padStart(2, '0')
        const day = (newPurchaseDateFull.getDate()).toString().padStart(2, '0')
        dispatch(getCurrencyAutocomplete(`${year}-${month}-${day}`, currencyType))
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
