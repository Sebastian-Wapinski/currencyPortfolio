import React from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledButton } from './currenciesFormData.styled'
import RenderInputs from '../../components/RenderInputs/RenderInputs'
import { useDispatch } from 'react-redux'
import { createActionAddAllData, createActionCurrencyAutocomplete } from './currenciesFormData.actions'

export const CurrenciesFormData = () => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      currencyType: '',
      amount: '',
      purchaseDate: '',
      currencyPrice: ''
    }
  })

  const { handleSubmit, reset } = methods

  const dispatch = useDispatch()

  const onSubmit = handleSubmit((data, e) => {
    reset()
    dispatch(createActionCurrencyAutocomplete(false))
    dispatch(createActionAddAllData(data))
  })

  return (
    <StyledForm
      onSubmit={onSubmit}
      autoComplete={'off'}
    >
      <FormProvider
        {...methods}
      >
        <RenderInputs/>
      </FormProvider>
      <StyledButton
        type={'submit'}
      >
        SUBMIT
      </StyledButton>
    </StyledForm>
  )
}

export default CurrenciesFormData
