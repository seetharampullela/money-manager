import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    balanceSheet: [],
  }

  changetitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({optionId: event.target.value})
  }

  deleteTransaction = id => {
    const {balanceSheet} = this.state
    const filteredData = balanceSheet.filter(each => id !== each.id)
    this.setState({
      balanceSheet: filteredData,
    })
  }

  onSubmitChange = event => {
    event.preventDefault()

    const {titleInput, amount, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newItem = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prevState => ({
      balanceSheet: [...prevState.balanceSheet, newItem],
      titleInput: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {balanceSheet} = this.state
    let expenses = 0

    balanceSheet.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {balanceSheet} = this.state
    let income = 0

    balanceSheet.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {balanceSheet} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    balanceSheet.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {titleInput, type, amount, balanceSheet} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="welcome-header">
          <h1>Hi, Richard </h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>

        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onSubmitChange}>
            <h1> Add Transaction </h1>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              placeholder="TITLE"
              id="title"
              value={titleInput}
              onChange={this.changetitleInput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="text"
              placeholder="Amount"
              id="amount"
              value={amount}
              onChange={this.changeAmount}
            />
            <label htmlFor="select">TYPE</label>
            <select id="select" value={type} onChange={this.changeType}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <div className="update-container">
            <h1>History</h1>
            <ul className="update-list">
              <li className="list-item-header">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p> </p>
              </li>
              {balanceSheet.map(each => (
                <TransactionItem
                  transactionItem={each}
                  key={each.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
