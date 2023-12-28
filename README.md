![screen of app](/assets/img/currencyPortfolio.png)

# Currency Portfolio

The application enables users to monitor and manage their gains and losses incurred based on purchased currencies. The data is stored in localStorage. Upon each application launch, current currency exchange rates are retrieved, and profits/losses are recalculated.

**Main features**:

- Adding currencies
- Automatic currency price fill-in based on entered date
- Automatic update of purchased currency rates upon page load
- State management using redux
- Sorting data

&nbsp;

## ⚙️ Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

&nbsp;

## ✈️ Application Tour

- Adding currency:

![](/assets/gif/addingNewCurrency.gif)

&nbsp;

## 💿 Installation

1. Clone the repository:

```
git clone [repository_url]
```

2. Navigate to the project directory:

```
cd [YOUR-REPO-NAME]
```

3. The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal:

```
npm i
```

4. To start application, type into the terminal:

```
npm start
```

## 💡 Solutions Provided In The Project

- Utilizing Redux and localStorage to manage data:

```
const reducers = combineReducers({
  formData: formDataReducer,
  exchangeRates: exchangeRatesReducer,
  currenciesSummary: currenciesSummaryReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const preloadedState = JSON.parse(localStorage.getItem(EXCHANGE_ARR_DATA_NAME)) || undefined

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(EXCHANGE_ARR_DATA_NAME, JSON.stringify(state))
})
```

- Utilizing NBP API:

```
const url = 'http://api.nbp.pl/api/exchangerates/tables/a/'

export const getCurrentCurrency = () => (dispatch, getState) => {
  return fetch(`${url}`)
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }

      throw new Error('Network Error')
    })
    .then(resp => {
      dispatch(createActionCurrentExchangeRate(resp))
      return resp
    })
    .catch(err => console.error(err))
}
```

- Using memoization to render only new data:

```
const tableRows = React.useMemo(() => {
    return currenciesFormData.map((item, i) => {
      const currentCurrency = checkIsCurrencyExists(currenciesExchangeData, item.currencyType)
      const currentValue = _computeCurrentValue(currentCurrency.mid, item.amount)
      const profitLoss = _computeProfitLoss(currentValue, item.amount, item.currencyPrice)
      const percentage = _computeProfitLossPercentage(currentValue, item.amount, item.currencyPrice)
      const percentageHigherThenZero = _isPercentageHigherThenZero(percentage)
      const currentValueHigherThenPurchaseValue = _isCurrentValueHigherThenPurchaseValue(currentValue, item.amount, item.currencyPrice)

      return (
        <MemoizedStyledTr
          key={`${item.amount}/${i}/${item.purchaseDate}`}
          item={item}
          currentCurrency={currentCurrency}
          currentValue={currentValue}
          profitLoss={profitLoss}
          percentage={percentage}
          currentValueHigherThenPurchaseValue={currentValueHigherThenPurchaseValue}
          percentageHigherThenZero={percentageHigherThenZero}
        />
      )
    })
  }, [_computeCurrentValue, _computeProfitLoss, _computeProfitLossPercentage, _isCurrentValueHigherThenPurchaseValue, _isPercentageHigherThenZero, currenciesExchangeData, currenciesFormData])

```

- Division of folders into modules for easier reusability.

&nbsp;

## ⏳ Future Ideas To Develop

- Removing data by moving to second array as sold

&nbsp;

## 🙋‍♂️ Feel free to contact me

Thank you for investing your time. I hope you enjoyed exploring my project and have a pleasant experience testing it. For any inquiries, feel free to reach out to me via email at sebastian.pawel.wapinski@gmail.com.

&nbsp;

## 👏 Thanks

I am truly grateful for the guidance and support provided by my mentors. A heartfelt thank you to each of them for their invaluable contributions.

#### [Akademia Samouka](https://akademiasamouka.pl/) - Mateusz Bogolubow i Mateusz Choma

#### Mateusz Choma - [coderoad](https://coderoad.pl/)

#### Mateusz Bogolubow - [devmentor](https://devmentor.pl/)
