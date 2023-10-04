import styled from 'styled-components'

const DefaultStyledTableHeaders = styled.thead`

`

const StyledTableHeaders = styled(DefaultStyledTableHeaders)(
  props => props.style
)

const StyledTr = styled.tr`

`

const StyledTh = styled.th`
border: 1px solid black;
border-collapse: collapse;
padding: 0.7rem 1rem;
`

export { StyledTableHeaders, StyledTh, StyledTr }
