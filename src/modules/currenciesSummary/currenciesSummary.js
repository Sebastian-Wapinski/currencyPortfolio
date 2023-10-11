import React from 'react'

import { StyledCurrenciesSummary, StyledParagraph, StyledContainer } from './currenciesSummary.styled'
import { useDispatch, useSelector } from 'react-redux'
import { createActionComputeSummary } from './currenciesSummary.actions'

export const CurrenciesSummary = () => {
  const currenciesFormData = useSelector(state => state.formData.currenciesFormData)
  const summary = useSelector(state => state.currenciesSummary)
  const dispatch = useDispatch()

  const { totalInvestment, totalCurrentValue, totalProfitLoss } = summary

  const arrayOfTotalsData = React.useMemo(() => {
    return (
      <StyledContainer>
        <StyledParagraph>TOTAL INVESTMENT: {totalInvestment}</StyledParagraph>
        <StyledParagraph>TOTAL CURRENT VALUE: {totalCurrentValue}</StyledParagraph>
        <StyledParagraph>TOTAL PROFIT/LOSS: {totalProfitLoss}</StyledParagraph>
      </StyledContainer>
    )
  }, [totalCurrentValue, totalInvestment, totalProfitLoss])

  React.useEffect(() => {
    dispatch(createActionComputeSummary(currenciesFormData))
  }, [currenciesFormData, dispatch, totalCurrentValue, totalInvestment])

  return (
    <StyledCurrenciesSummary>
      {arrayOfTotalsData}
    </StyledCurrenciesSummary>
  )
}

export default CurrenciesSummary
