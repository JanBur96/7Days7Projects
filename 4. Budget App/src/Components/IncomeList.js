import React, { useContext } from 'react';

import Context from '../context/context';
import IncomeItem from './IncomeItem';
import './IncomeList.css';

export default function IncomeList() {
  const { income } = useContext(Context);

  return (
    <ul className="budget__income-list">
      {income.map((income) => (
        <IncomeItem key={income.id} incomeContent={income} />
      ))}
    </ul>
  );
}
