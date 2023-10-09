import isDate from 'validator/lib/isDate'
import isISO4217 from 'validator/lib/isISO4217'
import isAfter from 'validator/lib/isAfter'
import isBefore from 'validator/lib/isBefore'

export const formCreationData = [
  {
    label: 'CURRENCY TYPE',
    id: 'currencyType',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required (format: XXX)'
      },
      minLength: {
        value: 3,
        message: 'Minimum length is 3 (format: XXX)'
      },
      maxLength: {
        value: 3,
        message: 'Maximum length is 3 (format: XXX)'
      },
      validate: (currency) => isISO4217(currency) || 'Nonexistent currency in stack e.g.USD'
    },
    isRequired: true,
    placeholder: 'USD'
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
    isRequired: true,
    placeholder: '1'
  },
  {
    label: 'DATE OF PURCHASE',
    id: 'purchaseDate',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required'
      },
      validate: {
        isDate: (date) => isDate(date, { format: 'YYYY-MM-DD' }) || 'Incorrect date (format YYYY-MM-DD)',
        beforeDate: (date) => isBefore(date) || 'Date after today - NOT ALLOWED',
        afterDate: (date) => isAfter(date, { comparisonDate: (new Date('2002-01-02')).toString() }) || 'Day before 2002-01-02 - NOT ALLOWED'
      }
    },
    isRequired: true,
    placeholder: '2023-01-01'
  },
  {
    label: 'PRICE',
    id: 'currencyPrice',
    validationParams: {
      required: {
        value: true,
        message: 'This field is required (format: X.XXXX)'
      },
      min: {
        value: 0.0001,
        message: 'Starts at 0.0001 (format: X.XXXX)'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]{4})$/,
        message: 'Incorrect price (format: X.XXXX)'
      }
    },
    isRequired: true,
    placeholder: '0.1234'
  }
]
