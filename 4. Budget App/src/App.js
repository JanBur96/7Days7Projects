import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Components/Header';
import TotalBudget from './Components/TotalBudget';
import Budget from './Components/Budget';
import AddBudget from './Components/AddBudget';
import Context from './context/context';

export default function App() {
  const [budget, setBudget] = useState(0);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const budgetData = JSON.parse(localStorage.getItem('budget'));

    if (budgetData) {
      setBudget(budgetData);
    }

    const incomeData = JSON.parse(localStorage.getItem('income'));

    if (incomeData) {
      setIncome(incomeData);
    }

    const expenseData = JSON.parse(localStorage.getItem('expense'));

    if (expenseData) {
      setExpense(expenseData);
    }

    const totalIncomeData = JSON.parse(localStorage.getItem('totalIncome'));

    if (totalIncomeData) {
      setTotalIncome(totalIncomeData);
    }

    const totalExpenseData = JSON.parse(localStorage.getItem('totalExpense'));

    if (totalExpenseData) {
      setTotalExpense(totalExpenseData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense]);

  useEffect(() => {
    localStorage.setItem('totalIncome', JSON.stringify(totalIncome));
    localStorage.setItem('totalExpense', JSON.stringify(totalExpense));

    setBudget(parseInt(totalIncome) + parseInt(totalExpense));
  }, [totalIncome, totalExpense]);

  useEffect(() => {
    setBudget(totalIncome - totalExpense);
  }, [totalIncome, totalExpense]);

  useEffect(() => {
    const budgetEL = document.querySelector('.total-budget__budget');
    console.log('runs');

    if (budget > 0) {
      budgetEL.style.color = 'green';
    } else if (budget < 0) {
      budgetEL.style.color = 'red';
    } else if (budget === 0) {
      budgetEL.style.color = 'black';
    }

    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  return (
    <Context.Provider
      value={{
        budget,
        setBudget,
        income,
        setIncome,
        expense,
        setExpense,
        totalIncome,
        setTotalIncome,
        totalExpense,
        setTotalExpense,
      }}
    >
      <div className="container">
        <Header />
        <TotalBudget />
        <Budget />
        <AddBudget />
      </div>
    </Context.Provider>
  );
}
