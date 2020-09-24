import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import Context from '../context/context';
import './AddIncome.css';

export default function AddIncome() {
  const { income, setIncome, totalIncome, setTotalIncome } = useContext(
    Context
  );

  const handleAddIncome = (e) => {
    e.preventDefault();

    const incomeText = e.target.incomeText.value.trim();
    const incomeNumber = e.target.incomeNumber.value;

    setIncome([
      ...income,
      { text: incomeText, amount: incomeNumber, id: uuid() },
    ]);

    setTotalIncome(totalIncome + parseInt(incomeNumber));

    e.target.incomeText.value = '';
    e.target.incomeNumber.value = '';
  };

  return (
    <form onSubmit={handleAddIncome} className="add-budget__add-income">
      <input
        type="text"
        name="incomeText"
        placeholder="Salary"
        className="add-budget__add-income__input"
        required
      ></input>
      <input
        type="number"
        name="incomeNumber"
        placeholder="3000"
        className="add-budget__add-income__input"
        required
      ></input>
      <button className="add-budget__add-income__button">Add Income</button>
    </form>
  );
}
