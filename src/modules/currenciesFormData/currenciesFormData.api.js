import { createActionCurrencyAutocomplete } from './currenciesFormData.actions'

const url = 'http://api.nbp.pl/api/exchangerates/rates/a'

const exchangeClosed = {
  rates: [{
    mid: 'EXCHANGE CLOSED'
  }]
}

export const getCurrencyAutocomplete = (purchaseDate, currencyType) => (dispatch, getState) => {
  return fetch(`${url}/${currencyType}/${purchaseDate}`)
    .then(resp => {
      if (resp.status === 404) {
        dispatch(createActionCurrencyAutocomplete(exchangeClosed))
        throw new Error('ERROR 404, NO DATA-EXCHANGE CLOSED')
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
