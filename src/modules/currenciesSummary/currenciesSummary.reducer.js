import { COMPUTE_SUMMARY } from './currenciesSummary.types'

const initialState = {
  totalInvestment: 0,
  totalCurrentValue: 0,
  totalProfitLoss: 0
}

const _computeTotalValue = (actions, callback) => {
  return actions.payload.reduce((acc, row) => {
    return acc + callback(row)
  }, 0)
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case COMPUTE_SUMMARY:
      const computedTotalInvestment = _computeTotalValue(actions, (row) => row.amount * row.currencyPrice)
      const computedTotalCurrentValue = _computeTotalValue(actions, (row) => row.currentValue)
      const computedTotalProfitLoss = _computeTotalValue(actions, (row) => row.profitLoss)

      return {
        ...state,
        totalInvestment: computedTotalInvestment.toFixed(2),
        totalCurrentValue: computedTotalCurrentValue.toFixed(2),
        totalProfitLoss: computedTotalProfitLoss.toFixed(2)
      }
    default:
      return state
  }
}

export default reducer
