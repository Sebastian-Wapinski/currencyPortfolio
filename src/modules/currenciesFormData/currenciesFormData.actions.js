import { ADD_ALL } from './currenciesFormData.types'

export const createActionAddAllData = (data) => {
  return {
    type: ADD_ALL,
    payload: data
  }
}
