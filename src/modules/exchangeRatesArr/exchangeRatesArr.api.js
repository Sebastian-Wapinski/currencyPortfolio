import { createActionCurrentExchangeRate } from './exchangeRatesArr.actions'

const url = 'http://api.nbp.pl/api/exchangerates/tables/a/'

export const getCurrentCurrency = () => (dispatch, getState) => {
  return fetch(`${url}`)
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }

      throw new Error('Network Error')
    })
    .then(resp => {
      dispatch(createActionCurrentExchangeRate(resp))
      return resp
    })
    .catch(err => console.error(err))
}
