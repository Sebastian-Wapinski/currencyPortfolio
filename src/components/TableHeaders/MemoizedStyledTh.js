import React from 'react'
import PropTypes from 'prop-types'
import { StyledTh } from './TableHeaders.styled'

export const MemoizedStyledTh = (props) => {
  const {
    id,
    header,
    onClick,
    ...otherProps
  } = props

  return (
    <StyledTh
      id={id}
      onClick={onClick}
      {...otherProps}
    >
      {header}
    </StyledTh>
  )
}

MemoizedStyledTh.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string,
  onClick: PropTypes.func
}

export default React.memo(MemoizedStyledTh)
