import React from 'react'
import PropTypes from 'prop-types'

import { StyledRenderInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderInputs.styled'
import { useFormContext } from 'react-hook-form'
import { formCreationData } from '../../data/formCreationData'
import isDate from 'validator/lib/isDate'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyAutocomplete } from '../../modules/currenciesFormData/currenciesFormData.api'

export const RenderInputs = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const methods = useFormContext()
  const { setValue, register, watch, formState: { errors } } = methods
  const dispatch = useDispatch()

  const purchaseDate = watch('purchaseDate')
  const currencyType = watch('currencyType')

  if (currencyType && isDate(purchaseDate, { format: 'YYYY-MM-DD' })) {
    dispatch(getCurrencyAutocomplete(purchaseDate, currencyType))
  }

  const autocompleteRate = useSelector(state => state.formData.autocompleteRate)

  React.useEffect(() => {
    if (currencyType && isDate(purchaseDate, { format: 'YYYY-MM-DD' })) {
      setValue('currencyPrice', autocompleteRate.toString())
    }
  }, [autocompleteRate, currencyType, purchaseDate, setValue])

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
