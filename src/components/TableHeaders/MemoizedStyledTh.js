import React from 'react'
import PropTypes from 'prop-types'
import { StyledTh } from './TableHeaders.styled'

export const MemoizedStyledTh = (props) => {
  const {
    id,
    header,
    ...otherProps
  } = props

  return (
    <StyledTh
      id={id}
      {...otherProps}
    >
      {header}
    </StyledTh>
  )
}

MemoizedStyledTh.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string
}

export default React.memo(MemoizedStyledTh)
