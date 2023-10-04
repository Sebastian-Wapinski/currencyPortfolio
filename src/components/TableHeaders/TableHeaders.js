import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableHeaders, StyledTh, StyledTr } from './TableHeaders.styled'
import { tableHeaders } from '../../data/tableHeaders'

export const TableHeaders = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledTableHeaders
      {...otherProps}
    >
      <StyledTr>
        {
        tableHeaders.map((header, i) => {
          return (
            <StyledTh key={`${header}/${i}`}>{header}</StyledTh>
          )
        })
      }
      </StyledTr>
    </StyledTableHeaders>
  )
}

TableHeaders.propTypes = {
  children: PropTypes.node
}

export default TableHeaders
