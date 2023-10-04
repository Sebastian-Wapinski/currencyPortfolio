import { ADD } from './currenciesFormData.types'

export const createActionAdd = (data) => {
  return {
    type: ADD,
    payload: data
  }
}
