import React, { useContext } from 'react';

import './Main.css';
import Context from '../Context/Context';

export default function Main() {
  const { bmi, setBmi } = useContext(Context);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const height = e.target.height.value;
    const weight = e.target.weight.value;

    setBmi(weight / (((height / 100) * height) / 100));

    e.target.height.value = '';
    e.target.weight.value = '';
  };

  return (
    <main className="main">
      <div className="card">
        <h2 className="card__heading">What's your BMI?</h2>
        <form onSubmit={handleOnSubmit} className="card__form">
          <label className="card__label">
            <i class="card__icon fas fa-arrows-alt-v"></i>
            Height
            <input
              className="card__input"
              type="number"
              name="height"
              placeholder="Your height in CM (e.g. 173)"
              required
            />
          </label>
          <label className="card__label">
            <i class="card__icon fas fa-weight"></i>
            Weight
            <input
              className="card__input"
              type="number"
              name="weight"
              placeholder="Your weight in KG (e.g. 70)"
              required
            />
          </label>
          <button className="card__button">Submit</button>
        </form>
        <div className="card__bmi">
          <h3>Your BMI is:</h3>
          {bmi >= 0 && <p className="card__result">{bmi.toFixed(2)}</p>}
        </div>
      </div>
    </main>
  );
}
