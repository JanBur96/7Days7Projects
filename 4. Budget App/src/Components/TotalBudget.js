import React, { useContext } from 'react';

import './TotalBudget.css';
import Context from '../context/context';

export default function TotalBudget() {
  const { budget, totalIncome, totalExpense } = useContext(Context);

  return (
    <section className="total-budget">
      <p className="total-budget__budget">{budget}€</p>
      <div className="total-budget__totals">
        <p className="total-budget__income">+ {totalIncome}€</p>
        <p className="total-budget__expense">- {totalExpense}€</p>
      </div>
    </section>
  );
}
