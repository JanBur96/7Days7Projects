import React, { useContext } from 'react';

import Context from '../context/context';
import './ExpenseItem.css';

export default function ExpenseItem({ expenseContent }) {
  const {
    budget,
    setBudget,
    expense,
    setExpense,
    totalExpense,
    setTotalExpense,
  } = useContext(Context);

  const handleRemoveExpense = (expenseContent) => {
    setBudget(budget - expenseContent.amount);
    setExpense(expense.filter((expense) => expense.id !== expenseContent.id));
    setTotalExpense(totalExpense - expenseContent.amount);
  };

  return (
    <li className="budget__expense-item">
      <div className="budget__expense-infos">
        <p className="budget__expense-amount">- {expenseContent.amount}€</p>
        <p className="budget__expense-text">{expenseContent.text}</p>
      </div>
      <button
        className="budget__expense-button"
        onClick={() => handleRemoveExpense(expenseContent)}
      >
        <i class="far fa-trash-alt"></i>
      </button>
    </li>
  );
}
