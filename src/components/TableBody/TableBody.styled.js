import styled from 'styled-components'

const DefaultStyledTableBody = styled.tbody`

`

const StyledTableBody = styled(DefaultStyledTableBody)(
  props => props.style
)

const StyledTr = styled.tr`
color: ${props => props.theme.thirdTextColor};

&:nth-child(even) {
  background: ${props => props.theme.secondaryBackground};
}
`

const StyledTd = styled.td`
border: 1px solid ${props => props.theme.primaryBackground};
border-collapse: collapse;
padding: 0.7rem 1rem;
text-align: center;

&:nth-child(-n + 1) {
  background: ${props => props.theme.forthBackground};
  color: ${props => props.theme.primaryBackground};
  font-weight: 600;
}
`
export { StyledTableBody, StyledTr, StyledTd }
