import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Context from '../Context/Context';

export default function App() {
  const [bmi, setBmi] = useState();

  return (
    <Context.Provider value={{ bmi, setBmi }}>
      <Header />
      <Main />
      <Footer />
    </Context.Provider>
  );
}
