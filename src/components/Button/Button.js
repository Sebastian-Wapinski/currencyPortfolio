import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    type
  } = props

  return (
    <StyledButton
      type={type}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

export default Button
