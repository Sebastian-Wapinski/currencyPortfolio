import styled from 'styled-components'

const DefaultStyledExchangeRatesArr = styled.table`
border: 1px solid black;
border-collapse: collapse;
`

const StyledExchangeRatesArr = styled(DefaultStyledExchangeRatesArr)(
  props => props.style
)

export {
  StyledExchangeRatesArr
}
