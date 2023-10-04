import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './Input.styled'

export const Input = React.forwardRef((props, ref) => {
  const {
    errors,
    id,
    ...otherProps
  } = props

  return (
    <div>
      <StyledInput
        ref={ref}
        id={id}
        {...otherProps}
      />
      {
          errors[id] && <p>{errors[id].message}</p>
      }
    </div>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  errors: PropTypes.object,
  id: PropTypes.string
}

export default Input
