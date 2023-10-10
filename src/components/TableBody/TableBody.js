import React from 'react'

import { StyledTableBody } from './TableBody.styled'
import { useSelector } from 'react-redux'
import { checkIsCurrencyExists } from '../../helper/helper'
import MemoizedStyledTr from './MemoizedStyledTr'

export const TableBody = () => {
  const currenciesFormData = useSelector(state => state.formData.currenciesFormData)
  const currenciesExchangeData = useSelector(state => state.exchangeRates.currencyRates)

  const _computeCurrentValue = React.useCallback((currentCurrency, amount) => {
    return (currentCurrency * amount).toFixed(2)
  }, [])

  const _computeProfitLoss = React.useCallback((currentValue, amount, currencyPrice) => {
    return ((currentValue) - (amount * currencyPrice)).toFixed(2)
  }, [])

  const _computeProfitLossPercentage = React.useCallback((currentValue, amount, currencyPrice) => {
    return Number((((currentValue * 100) / (amount * currencyPrice)) - 100).toFixed(2))
  }, [])

  const _isPercentageHigherThenZero = React.useCallback((percentage) => {
    return Math.floor(Number(percentage)) > 0
  }, [])

  const _isCurrentValueHigherThenPurchaseValue = React.useCallback((currentValue, amount, currencyPrice) => {
    return currentValue > (amount * currencyPrice).toFixed(2)
  }, [])

  const tableRows = React.useMemo(() => {
    return currenciesFormData.map((item, i) => {
      const currentCurrency = checkIsCurrencyExists(currenciesExchangeData, item.currencyType)
      const currentValue = _computeCurrentValue(currentCurrency.mid, item.amount)
      const profitLoss = _computeProfitLoss(currentValue, item.amount, item.currencyPrice)
      const percentage = _computeProfitLossPercentage(currentValue, item.amount, item.currencyPrice)
      const percentageHigherThenZero = _isPercentageHigherThenZero(percentage)
      const currentValueHigherThenPurchaseValue = _isCurrentValueHigherThenPurchaseValue(currentValue, item.amount, item.currencyPrice)

      return (
        <MemoizedStyledTr
          key={`${item.amount}/${i}/${item.purchaseDate}`}
          item={item}
          currentCurrency={currentCurrency}
          currentValue={currentValue}
          profitLoss={profitLoss}
          percentage={percentage}
          currentValueHigherThenPurchaseValue={currentValueHigherThenPurchaseValue}
          percentageHigherThenZero={percentageHigherThenZero}
        />
      )
    })
  }, [_computeCurrentValue, _computeProfitLoss, _computeProfitLossPercentage, _isCurrentValueHigherThenPurchaseValue, _isPercentageHigherThenZero, currenciesExchangeData, currenciesFormData])

  return (
    <StyledTableBody>
      {tableRows}
    </StyledTableBody>
  )
}

export default React.memo(TableBody)
