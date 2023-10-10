import React from 'react'
import PropTypes from 'prop-types'

import { StyledTd, StyledTr } from './TableBody.styled'
import { useDispatch } from 'react-redux'
import { createActionUpdateCurrencyData } from '../../modules/currenciesFormData/currenciesFormData.actions'

export const MemoizedStyledTr = (props) => {
  const {
    item,
    currentCurrency,
    currentValue,
    profitLoss,
    percentage,
    currentValueHigherThenPurchaseValue,
    percentageHigherThenZero,
    ...otherProps
  } = props

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(createActionUpdateCurrencyData(item.id, currentCurrency.mid, currentValue, profitLoss))
  }, [currentCurrency.mid, currentValue, dispatch, item.id, profitLoss])

  return (
    <StyledTr
      key={`${item.amount}/${item.purchaseDate}`}
      {...otherProps}
    >
      <StyledTd>{item.currencyType.toUpperCase()}</StyledTd>
      <StyledTd>{item.amount}</StyledTd>
      <StyledTd>{item.purchaseDate}</StyledTd>
      <StyledTd>{item.currencyPrice}</StyledTd>
      <StyledTd>{currentCurrency.mid}</StyledTd>
      <StyledTd>{currentValue}</StyledTd>
      <StyledTd>{currentValueHigherThenPurchaseValue ? '+' : null}{profitLoss}({percentageHigherThenZero ? '+' : null}{percentage}%)</StyledTd>
    </StyledTr>
  )
}

MemoizedStyledTr.propTypes = {
  item: PropTypes.object,
  currentCurrency: PropTypes.object,
  currentValue: PropTypes.string,
  profitLoss: PropTypes.string,
  percentage: PropTypes.number,
  currentValueHigherThenPurchaseValue: PropTypes.bool,
  percentageHigherThenZero: PropTypes.bool
}

export default React.memo(MemoizedStyledTr)
