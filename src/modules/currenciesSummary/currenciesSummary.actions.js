import { COMPUTE_SUMMARY } from './currenciesSummary.types'

export const createActionComputeSummary = (data) => {
  return {
    type: COMPUTE_SUMMARY,
    payload: data
  }
}
