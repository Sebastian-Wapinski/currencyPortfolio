import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledTableBody = styled.tbody`
`

const StyledTableBody = styled(DefaultStyledTableBody)(
  props => props.style
)

const StyledTr = styled.tr`
color: ${props => props.theme.thirdTextColor};

@media (max-width: ${responsiveSizes.medium}) {
  overflow-wrap: break-word;
}

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

@media (max-width: ${responsiveSizes.medium}) and (min-width: ${responsiveSizes.small}) {
  padding: 0.6rem 0.3rem;
  font-weight: 500;
  font-size: 0.7rem;
  min-width: 5rem;
}

@media (max-width: ${responsiveSizes.small}) {
  padding: 0.2rem 0;
  font-weight: 400;
  font-size: 0.7rem;
  max-width: 2.7rem;
  overflow-wrap: break-word;
}
`
export { StyledTableBody, StyledTr, StyledTd }
