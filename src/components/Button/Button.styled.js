import styled from 'styled-components'

const DefaultStyledButton = styled.button`
margin: 0.7rem 0;
border: none;
min-width: 9rem;
width: 100%;
min-height: 3rem;
border-radius: 50px;
background: ${props => props.theme.forthBackground};
border: 1px solid ${props => props.theme.forthBackground};
box-shadow: 0px 10px 20px -10px ${props => props.theme.forthBackground};

color: ${props => props.theme.primaryBackground};
font-weight: 600;
font-size: 0.95rem;
transition: all 0.3s ease-in-out;

&:hover {
  cursor: pointer;
  border-radius: 50px;
  background: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.forthBackground};
}

&:active {
  cursor: pointer;
  border-radius: 50px;
  background: #ABFFDA;
  box-shadow: inset 20px 20px 36px #89ccae, inset -20px -20px 36px #cdffff;
}
`

const StyledButton = styled(DefaultStyledButton)(
  props => props.style
)

export { StyledButton }
