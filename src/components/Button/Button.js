import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledButton
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button
