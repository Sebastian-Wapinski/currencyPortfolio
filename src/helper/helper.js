export const checkIsCurrencyExists = (dataArray, currencyType) => {
  return dataArray.find(currency => currency.code === currencyType.toUpperCase()) || false
}
