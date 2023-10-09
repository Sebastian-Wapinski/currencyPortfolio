import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledLabel = styled.label`
display: flex;
justify-content: center;
margin: 0.6rem 0;
color: ${props => props.theme.thirdTextColor};
font-weight: 500;
cursor: pointer;
${
  props => props.required === true && css`
  &::before {
    content:'*'
  }
  `
}

@media (max-width: ${responsiveSizes.small}) {
  font-size: 0.8rem;
  margin: 0.5rem 0;
}
`

const StyledLabel = styled(DefaultStyledLabel)(
  props => props.style
)

export { StyledLabel }
