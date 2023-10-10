import React from 'react'

import { StyledTableHeaders, StyledTr } from './TableHeaders.styled'
import { tableHeaders } from '../../data/tableHeaders'
import MemoizedStyledTh from './MemoizedStyledTh'
import { createActionSortData } from '../../modules/currenciesFormData/currenciesFormData.actions'
import { useDispatch } from 'react-redux'

export const TableHeaders = () => {
  const dispatch = useDispatch()
  const sortById = (e) => {
    dispatch(createActionSortData(e.target.id))
  }

  return (
    <StyledTableHeaders>
      <StyledTr>
        {
        tableHeaders.map(({ id, label }) => {
          return (
            <MemoizedStyledTh
              key={`${id}`}
              id={`${id}`}
              header={label}
              onClick={sortById}
            />
          )
        })
    }
      </StyledTr>
    </StyledTableHeaders>
  )
}

export default React.memo(TableHeaders)
