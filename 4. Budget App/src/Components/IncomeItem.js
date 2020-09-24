import React, { useContext } from 'react';

import Context from '../context/context';
import './IncomeItem.css';

export default function IncomeItem({ incomeContent }) {
  const {
    budget,
    setBudget,
    income,
    setIncome,
    totalIncome,
    setTotalIncome,
  } = useContext(Context);

  const handleRemoveIncome = (incomeContent) => {
    setBudget(budget - incomeContent.amount);
    setIncome(income.filter((income) => income.id !== incomeContent.id));
    setTotalIncome(totalIncome - incomeContent.amount);
  };

  return (
    <li className="budget__income-item">
      <div className="budget__income-infos">
        <p className="budget__income-amount">+ {incomeContent.amount}€</p>
        <p className="budget__income-text">{incomeContent.text}</p>
      </div>
      <button
        className="budget__income-button"
        onClick={() => handleRemoveIncome(incomeContent)}
      >
        <i class="far fa-trash-alt"></i>
      </button>
    </li>
  );
}
