import React, { useContext } from 'react';

import Context from '../context/context';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList() {
  const { expense } = useContext(Context);

  return (
    <ul className="budget__expense-list">
      {expense.map((expense) => (
        <ExpenseItem key={expense.id} expenseContent={expense} />
      ))}
    </ul>
  );
}
