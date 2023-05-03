import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { PokemonById } from './PokemonById'
import { useSelector } from 'react-redux'

export const ListPokemons = () => {
 const nameTrainer = useSelector(store => store.nameTrainer)
const [pokemons, setpokemon] = useState([])
useEffect(() => {
 const URL="https://pokeapi.co/api/v2/pokemon"
 axios
 .get(URL)
 .then((res)=>setpokemon(res.data.results))
  .catch((error)=>console.log(error))
}, [])

  return (
    <div>
     
     <div className=' p-14 grid gap-20 grid-cols-[300px] top'>
     {
     pokemons.map(pokemon=><PokemonById   key={pokemon.url} pokemonUrl={pokemon.url} />)
     }
     </div>
    </div>
  )
}
