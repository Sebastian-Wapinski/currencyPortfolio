import React from 'react'

import { StyledTableHeaders, StyledTr } from './TableHeaders.styled'
import { tableHeaders } from '../../data/tableHeaders'
import MemoizedStyledTh from './MemoizedStyledTh'
import { createActionSortData } from '../../modules/currenciesFormData/currenciesFormData.actions'
import { useDispatch } from 'react-redux'

export const TableHeaders = () => {
  const [sortOrder, setSortOrder] = React.useState('asc')
  const [sortIdNumber, setSortIdNumber] = React.useState(null)
  const dispatch = useDispatch()

  const sortById = (e) => {
    dispatch(createActionSortData(e.target.id, sortOrder, setSortOrder))
    setSortIdNumber(e.target.id)
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
              sortIdNumber={sortIdNumber}
              sortOrder={sortOrder}
            />
          )
        })
    }
      </StyledTr>
    </StyledTableHeaders>
  )
}

export default React.memo(TableHeaders)
