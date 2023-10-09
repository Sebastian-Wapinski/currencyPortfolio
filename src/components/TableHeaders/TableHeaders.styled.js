import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

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

@media (max-width: ${responsiveSizes.medium}) and (min-width: ${responsiveSizes.small}) {
  padding: 0.6rem 0.3rem;
  font-weight: 500;
  font-size: 0.7rem;
  min-width: 5rem;
}

@media (max-width: ${responsiveSizes.small}) {
  padding: 0.4rem 0.2rem;
  font-weight: 400;
  font-size: 0.7rem;
  max-width: 2.7rem;
  overflow-wrap: break-word;
}
`

export { StyledTableHeaders, StyledTh, StyledTr }
