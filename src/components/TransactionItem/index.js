// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItem, deleteTransaction} = props
  const {title, amount, type, id} = transactionItem
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item-value">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteTransaction}
        testid="delete"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
