import React from 'react'
import PropTypes from 'prop-types'

import { StyledRenderInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderInputs.styled'
import { useFormContext } from 'react-hook-form'
import { formCreationData } from '../../data/formCreationData'
import isDate from 'validator/lib/isDate'

export const RenderInputs = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const methods = useFormContext()
  const { register, watch, formState: { errors } } = methods

  const purchaseDate = watch('purchaseDate')

  if (isDate(purchaseDate, { format: 'YYYY-MM-DD' })) {
    console.log('apiCall')
    // setPurchaseDateCall(true) Redux
  }

  return (
    <StyledRenderInputs
      {...otherProps}
    >
      {
        formCreationData.map(input => {
          const { label, id, validationParams, isRequired } = input
          return (
            <StyledInputContainer key={id}>
              <StyledLabel
                htmlFor={id}
                isRequired={isRequired}
              >
                {label}
              </StyledLabel>
              <StyledInput
                type={'text'}
                id={id}
                errors={errors}
                {...register(id, { ...validationParams })}
              />
            </StyledInputContainer>
          )
        })
      }
    </StyledRenderInputs>
  )
}

RenderInputs.propTypes = {
  children: PropTypes.node
}

export default RenderInputs
