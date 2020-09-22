import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header'
import PokemonList from './PokemonList';
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150",)
      .then(res => {
        setPokemon(res.data.results.map(p => p))
      })  
  }, []);

  return (
    <>
      <Header />
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default App;
