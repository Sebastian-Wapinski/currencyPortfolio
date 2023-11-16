import React from 'react'
import PropTypes from 'prop-types'
import { StyledTh, StyledArrow } from './TableHeaders.styled'

export const MemoizedStyledTh = (props) => {
  const {
    id,
    header,
    onClick,
    sortIdNumber,
    sortOrder
  } = props

  const arrowIcon = React.useCallback(() => {
    if (sortIdNumber === id) {
      return (
        <StyledArrow>
          {sortOrder === 'asc' ? '▲' : '▼'}
        </StyledArrow>
      )
    }
  }, [id, sortIdNumber, sortOrder])

  return (
    <>
      <StyledTh
        id={id}
        onClick={onClick}
      >
        {header}
        {
          arrowIcon()
        }
      </StyledTh>
    </>
  )
}

MemoizedStyledTh.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string,
  onClick: PropTypes.func,
  sortIdNumber: PropTypes.string,
  sortOrder: PropTypes.string
}

export default React.memo(MemoizedStyledTh)
