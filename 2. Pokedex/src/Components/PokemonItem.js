import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './PokemonItem.css'

export default function PokemonItem( {pokemon} ) {
  const [sprite, setSprite] = useState();
  const [id, setId] = useState();
  const [types, setTypes] = useState();
  const [stats, setStats] = useState();


  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => {
        // console.log(res.data.stats.map(s => console.log(s.stat.name + s.base_stat)))
        setId(res.data.id)
        setSprite(res.data.sprites.front_default)
        setTypes(res.data.types.map(t => <li className='pokemon__type' style={{backgroundColor: color(t.type.name)}}>{t.type.name}</li>))
        setStats(res.data.stats.map(s => <li>{s.stat.name}: {s.base_stat}</li>))
      })
  }, [])


  const color = (type) => {
    switch (type) {
      case 'grass':
        return '#06c258'
      case 'poison':
        return '#a300a3'
      case 'fire':
        return 'red'
      case 'water':
        return '#187bcd'
      case 'bug':
        return 'green'
      case 'flying':
        return '#e4e4e4'
      case 'normal':
        return '#e2e2e2'
      case 'electric':
        return '#FFFF00'
      case 'ground':
        return '#B5651D'
      case 'fairy':
        return 'pink'
      case 'fighting':
        return 'brown'
      case 'psychic':
        return '#bf61cf'
      case 'rock':
        return 'gray'
      case 'steel':
        return '#C0C0C0'
      case 'ice':
        return '#b9e8ea'
      case 'ghost':
        return '#6c3775';
      case 'dragon':
        return '#FFA500	'
      default: 
      console.log('bye')
    }
  }

  return (
    <li className='pokemon__item' style={{backgroundColor: ''}}>
      <img className='pokemon__image' src={sprite} alt={pokemon.name} />
      <div className='pokemon__infos'>
        <h2 className='pokemon__name'>#{id} {pokemon.name}</h2>
        <ul className='pokemon__stats'>{stats}</ul>
        <ul className='pokemon__types'>{types}</ul>
      </div>
    </li>
  )

}
