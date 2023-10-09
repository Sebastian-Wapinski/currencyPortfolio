import styled from 'styled-components'
import Button from '../../components/Button/Button'

const DefaultStyledForm = styled.form`
max-width: 20rem;
width: 100%;
padding: 1rem;
`

const StyledForm = styled(DefaultStyledForm)(
  props => props.style
)

const StyledButton = styled(Button)`

`

export {
  StyledForm,
  StyledButton
}
