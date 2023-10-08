import styled from 'styled-components'

const DefaultStyledTableBody = styled.tbody`

`

const StyledTableBody = styled(DefaultStyledTableBody)(
  props => props.style
)

const StyledTr = styled.tr`
  
`

const StyledTd = styled.td`
border: 1px solid black;
border-collapse: collapse;
padding: 0.7rem 1rem;
`
export { StyledTableBody, StyledTr, StyledTd }
