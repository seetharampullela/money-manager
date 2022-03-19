// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="list-container">
      <div className="list-item balance-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-details"
        />
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="list-item income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-details"
        />
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="list-item expense-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-details"
        />
        <div>
          <p>Your Expenses </p>
          <p testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
