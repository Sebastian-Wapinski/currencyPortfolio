import styled from 'styled-components'

const DefaultStyledTableHeaders = styled.thead`

`

const StyledTableHeaders = styled(DefaultStyledTableHeaders)(
  props => props.style
)

const StyledTr = styled.tr`

`

const StyledTh = styled.th`
border: 1px solid ${props => props.theme.primaryBackground};
border-collapse: collapse;
padding: 0.7rem 1rem;
background: ${props => props.theme.forthBackground};
color: ${props => props.theme.primaryBackground};
`

export { StyledTableHeaders, StyledTh, StyledTr }
