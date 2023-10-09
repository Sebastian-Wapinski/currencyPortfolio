import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, StyledErrorsMessage } from './Input.styled'

export const Input = React.forwardRef((props, ref) => {
  const {
    errors,
    id,
    ...otherProps
  } = props

  return (
    <>
      <StyledInput
        ref={ref}
        id={id}
        {...otherProps}
      />
      {
          errors[id] && <StyledErrorsMessage>{errors[id].message}</StyledErrorsMessage>
      }
    </>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  errors: PropTypes.object,
  id: PropTypes.string
}

export default Input
