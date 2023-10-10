import React from 'react'

import { StyledTableHeaders, StyledTr } from './TableHeaders.styled'
import { tableHeaders } from '../../data/tableHeaders'
import MemoizedStyledTh from './MemoizedStyledTh'

export const TableHeaders = () => {
  return (
    <StyledTableHeaders>
      <StyledTr>
        {
        tableHeaders.map((header, i) => {
          return (
            <MemoizedStyledTh
              key={`${header}/${i}`}
              id={`${header}/${i}`}
              header={header}
            />
          )
        })
    }
      </StyledTr>
    </StyledTableHeaders>
  )
}

export default React.memo(TableHeaders)
