import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledCurrenciesSummary = styled.div`
max-width: 20rem;
width: 100%;
padding: 0.5rem 1rem;
`

const StyledCurrenciesSummary = styled(DefaultStyledCurrenciesSummary)(
  props => props.style
)

const StyledContainer = styled.div`
background-color: ${props => props.theme.forthBackground};
color: ${props => props.theme.primaryBackground};
box-shadow: 0px 10px 20px -10px ${props => props.theme.forthBackground};
border-radius: 50px;
padding: 1rem 0;
margin-bottom: 1rem;
font-weight: 600;
font-size: 0.95rem;
`

const StyledParagraph = styled.p`
text-align: center;
padding: 0.2rem 0;

@media (max-width: ${responsiveSizes.small}) {
  font-size: 0.85rem;
}
`

export {
  StyledCurrenciesSummary,
  StyledParagraph,
  StyledContainer
}
