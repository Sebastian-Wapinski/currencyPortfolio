import React from 'react'

import { StyledRenderInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderInputs.styled'

import { useFormContext } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { formCreationData } from '../../data/formCreationData'
import { getCurrencyAutocomplete } from '../../modules/currenciesFormData/currenciesFormData.api'
import { checkIsCurrencyExists } from '../../helper/helper'

import isDate from 'validator/lib/isDate'
import isBefore from 'validator/lib/isBefore'
import isAfter from 'validator/lib/isAfter'

export const RenderInputs = () => {
  const methods = useFormContext()
  const { setValue, register, watch, clearErrors, formState: { errors } } = methods

  const dispatch = useDispatch()
  const autocompleteRate = useSelector(state => state.formData.autocompleteRate)
  const currenciesExchangeData = useSelector(state => state.exchangeRates.currencyRates)

  const purchaseDate = watch('purchaseDate')
  const currencyType = watch('currencyType')

  const _checkIsCurrencyExists = React.useCallback(() => {
    return checkIsCurrencyExists(currenciesExchangeData, currencyType)
  }, [currenciesExchangeData, currencyType])

  const _checkAutocompleteDependencies = React.useCallback((isCurrencyExists, purchaseDate) => {
    return (
      isCurrencyExists &&
      isDate(purchaseDate, { format: 'YYYY-MM-DD' }) &&
      isBefore(purchaseDate) &&
      isAfter(purchaseDate, { comparisonDate: (new Date('2002-01-02')).toString() })
    )
  }, [])

  const _makeAutocomplete = React.useCallback((isCurrencyExists) => {
    if (_checkAutocompleteDependencies(isCurrencyExists, purchaseDate)) {
      dispatch(getCurrencyAutocomplete(purchaseDate, currencyType))
      setValue('currencyPrice', autocompleteRate.toString())
      clearErrors('currencyPrice')
    }
  }, [_checkAutocompleteDependencies, autocompleteRate, clearErrors, currencyType, dispatch, purchaseDate, setValue])

  React.useEffect(() => {
    const isCurrencyExists = _checkIsCurrencyExists()
    _makeAutocomplete(isCurrencyExists)
  }, [_checkIsCurrencyExists, _makeAutocomplete])

  return (
    <StyledRenderInputs>
      {
        formCreationData.map(input => {
          const { label, id, validationParams, isRequired, placeholder } = input
          return (
            <StyledInputContainer key={id}>
              <StyledLabel
                htmlFor={id}
                isRequired={isRequired}
              >
                {label}
              </StyledLabel>
              <StyledInput
                autoComplete={'one-time-code'}
                type={'text'}
                id={id}
                errors={errors}
                placeholder={placeholder}
                {...register(id, { ...validationParams })}
              />
            </StyledInputContainer>
          )
        })
      }
    </StyledRenderInputs>
  )
}

export default RenderInputs
