import styled from 'styled-components'
import Button from '../../components/Button/Button'

const DefaultStyledForm = styled.form`

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
