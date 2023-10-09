import styled from 'styled-components'

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
`

const StyledInput = styled(DefaultStyledInput)(
  props => props.style
)

export { StyledInput }
