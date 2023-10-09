import React from 'react'

import { StyledTableHeaders, StyledTh, StyledTr } from './TableHeaders.styled'
import { tableHeaders } from '../../data/tableHeaders'

export const TableHeaders = () => {
  return (
    <StyledTableHeaders>
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

export default TableHeaders
