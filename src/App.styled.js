import styled from 'styled-components'

const DefaultStyledApp = styled.div`
display: flex;
justify-content: center;
background-color: ${(props) => props.theme.primaryBackground};
width: 100%;
min-height: 100vh;
`

const StyledApp = styled(DefaultStyledApp)(
  props => props.style
)

const StyledLayout = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
max-width: 90rem;
width: 100%;
`

export { StyledApp, StyledLayout }
