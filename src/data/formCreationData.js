import isDate from 'validator/lib/isDate'
import isISO4217 from 'validator/lib/isISO4217'

export const formCreationData = [
  {
    label: 'CURRENCY TYPE',
    id: 'currencyType',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 3,
        message: 'Minimum length is 3'
      },
      maxLength: {
        value: 3,
        message: 'Maximum length is 3'
      },
      validate: (currency) => isISO4217(currency) || 'Incorrect currency'
    },
    isRequired: true
  },
  {
    label: 'AMOUNT OF CURRENCY',
    id: 'amount',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      minLength: {
        value: 1,
        message: 'Minimum is 1 digit'
      },
      pattern: {
        value: /^[1-9][0-9]*$/,
        message: 'Only digits starting 1-9 acceptable'
      },
      min: {
        value: 1,
        message: 'Starts at 1'
      }
    },
    isRequired: true
  },
  {
    label: 'DATE OF PURCHASE',
    id: 'purchaseDate',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      validate: (date) => isDate(date, { format: 'YYYY-MM-DD' }) || 'Incorrect date'
    },
    isRequired: true
  },
  {
    label: 'PRICE',
    id: 'currencyPrice',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      min: {
        value: 0.0001,
        message: 'Starts at 0.0001'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]{4})$/,
        message: 'Incorrect price'
      }
    },
    isRequired: true
  }
]
