import React from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { StyledForm, StyledButton } from './currenciesFormData.styled'
import RenderInputs from '../../components/RenderInputs/RenderInputs'
import { useDispatch } from 'react-redux'
import { createActionAdd } from './currenciesFormData.actions'

export const CurrenciesFormData = () => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const { handleSubmit, reset } = methods

  const dispatch = useDispatch()

  const onSubmit = handleSubmit((data, e) => {
    console.log(data)
    reset()
    dispatch(createActionAdd(data))
    // setPurchaseDateCall(false)
  }, (error, e) => {
    console.log(error)
  })

  return (
    <StyledForm
      onSubmit={onSubmit}
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
