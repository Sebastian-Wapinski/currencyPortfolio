import styled from 'styled-components'

const DefaultStyledExchangeRatesArr = styled.table`
border-collapse: collapse;
width: 100%;
`

const StyledExchangeRatesArr = styled(DefaultStyledExchangeRatesArr)(
  props => props.style
)

export {
  StyledExchangeRatesArr
}
