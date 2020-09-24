import React from 'react';

import './Budget.css';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

export default function Budget() {
  return (
    <section className="budget">
      <IncomeList />
      <ExpenseList />
    </section>
  );
}
