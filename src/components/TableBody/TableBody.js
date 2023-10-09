import React from 'react'

import { StyledTableBody, StyledTr, StyledTd } from './TableBody.styled'
import { useSelector } from 'react-redux'
import { checkIsCurrencyExists } from '../../helper/helper'

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

  return (
    <StyledTableBody>
      {
          currenciesFormData.map((item, i) => {
            const currentCurrency = checkIsCurrencyExists(currenciesExchangeData, item.currencyType)
            const currentValue = _computeCurrentValue(currentCurrency.mid, item.amount)
            const profitLoss = _computeProfitLoss(currentValue, item.amount, item.currencyPrice)
            const percentage = _computeProfitLossPercentage(currentValue, item.amount, item.currencyPrice)
            const percentageHigherThenZero = _isPercentageHigherThenZero(percentage)
            const currentValueHigherThenPurchaseValue = _isCurrentValueHigherThenPurchaseValue(currentValue, item.amount, item.currencyPrice)

            return (
              <StyledTr key={`${item.amount}/${i}/${item.purchaseDate}`}>
                <StyledTd>{item.currencyType.toUpperCase()}</StyledTd>
                <StyledTd>{item.amount}</StyledTd>
                <StyledTd>{item.purchaseDate}</StyledTd>
                <StyledTd>{item.currencyPrice}</StyledTd>
                <StyledTd>{currentCurrency.mid}</StyledTd>
                <StyledTd>{currentValue}</StyledTd>
                <StyledTd>{currentValueHigherThenPurchaseValue ? '+' : null}{profitLoss}({percentageHigherThenZero ? '+' : null}{percentage}%)</StyledTd>
              </StyledTr>
            )
          })
        }
    </StyledTableBody>
  )
}

export default TableBody
