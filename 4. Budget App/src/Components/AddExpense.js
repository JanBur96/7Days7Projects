import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import Context from '../context/context';
import './AddExpense.css';

export default function AddExpense() {
  const { expense, setExpense, totalExpense, setTotalExpense } = useContext(
    Context
  );

  const handleAddExpense = (e) => {
    e.preventDefault();

    const expenseText = e.target.expenseText.value.trim();
    const expenseNumber = e.target.expenseNumber.value;

    setExpense([
      ...expense,
      { text: expenseText, amount: expenseNumber, id: uuid() },
    ]);

    setTotalExpense(totalExpense + parseInt(expenseNumber));

    e.target.expenseText.value = '';
    e.target.expenseNumber.value = '';
  };

  return (
    <form onSubmit={handleAddExpense} className="add-budget__add-expense">
      <input
        type="text"
        name="expenseText"
        placeholder="Groceries"
        className="add-budget__add-expense__input"
        required
      ></input>
      <input
        type="number"
        name="expenseNumber"
        placeholder="40"
        className="add-budget__add-expense__input"
        required
      ></input>
      <button className="add-budget__add-expense__button">Add Expense</button>
    </form>
  );
}
