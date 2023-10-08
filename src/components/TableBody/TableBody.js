import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableBody, StyledTr, StyledTd } from './TableBody.styled'
import { useSelector } from 'react-redux'

export const TableBody = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const currenciesFormData = useSelector(state => state.formData.currenciesFormData)
  const currenciesExchangeData = useSelector(state => state.exchangeRates.currencyRates)

  return (
    <StyledTableBody
      {...otherProps}
    >
      {
          currenciesFormData.map((item, i) => {
            const [currentCurrency] = currenciesExchangeData.filter(currency => currency.code === item.currencyType.toUpperCase())
            const currentValue = (currentCurrency.mid * item.amount).toFixed(2)
            const profitLoss = ((currentValue) - (item.amount * item.currencyPrice)).toFixed(2)
            const percentage = Number((((currentValue * 100) / (item.amount * item.currencyPrice)) - 100).toFixed(2))
            const isPercentageHigherThenZero = Math.floor(Number(percentage)) > 0
            const isCurrentValueHigherThenPurchaseValue = currentValue > (item.amount * item.currencyPrice).toFixed(2)

            return (
              <StyledTr key={`${item.amount}/${i}/${item.purchaseDate}`}>
                <StyledTd>{item.currencyType.toUpperCase()}</StyledTd>
                <StyledTd>{item.amount}</StyledTd>
                <StyledTd>{item.purchaseDate}</StyledTd>
                <StyledTd>{item.currencyPrice}</StyledTd>
                <StyledTd>{currentCurrency.mid}</StyledTd>
                <StyledTd>{currentValue}</StyledTd>
                <StyledTd>{isCurrentValueHigherThenPurchaseValue ? '+' : null}{profitLoss}({isPercentageHigherThenZero ? '+' : null}{percentage}%)</StyledTd>
              </StyledTr>
            )
          })
        }
    </StyledTableBody>
  )
}

TableBody.propTypes = {
  children: PropTypes.node
}

export default TableBody
