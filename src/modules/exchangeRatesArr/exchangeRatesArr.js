import React from 'react'

import { StyledExchangeRatesArr } from './exchangeRatesArr.styled'
import TableHeaders from '../../components/TableHeaders/TableHeaders'
import TableBody from '../../components/TableBody/TableBody'
import { useDispatch } from 'react-redux'
import { getCurrentCurrency } from './exchangeRatesArr.api'

export const ExchangeRatesArr = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCurrentCurrency())
  }, [dispatch])

  return (
    <StyledExchangeRatesArr>
      <TableHeaders />
      <TableBody />
    </StyledExchangeRatesArr>
  )
}

export default React.memo(ExchangeRatesArr)
