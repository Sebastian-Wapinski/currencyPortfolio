import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledInput = styled.input`
width: 100%;
padding: 0.5rem;
background-color: ${props => props.theme.secondaryBackground};
box-shadow: 0px 10px 20px -10px ${props => props.theme.forthBackground};
border: none;
border-radius: 40px;
outline: none;
color: ${props => props.theme.thirdTextColor};
font-weight: 600;
font-size: 0.95rem;
text-align: center;

@media (max-width: ${responsiveSizes.small}) {
  font-weight: 500;
  font-size: 0.75rem;
  padding: 0.3rem;
}
`

const StyledInput = styled(DefaultStyledInput)(
  props => props.style
)

const StyledErrorsMessage = styled.p`
width: 100%;
padding: 0.5rem;
color: ${props => props.theme.errorMessage};
font-weight: 600;
font-size: 0.8rem;
text-align: center;

@media (max-width: ${responsiveSizes.small}) {
  font-weight: 500;
  font-size: 0.7rem;
  padding: 0.3rem;
}
`

export { StyledInput, StyledErrorsMessage }
