import React from 'react'

import PokemonItem from './PokemonItem'
import './PokemonList.css'

export default function PokemonList({ pokemon }) {
  return (
    <main className="main">
      <div className="card">
        <ul className="pokemon__list">
          {pokemon.map(pokemon => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </main>
  )
}
