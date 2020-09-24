import React from 'react';

import './AddBudget.css';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';

export default function AddBudget() {
  return (
    <section className="add-budget">
      <AddIncome />
      <AddExpense />
    </section>
  );
}
