import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'



export const PokemonById = ({ pokemonUrl }) => {
  const typecolor={
  grass:'bg-gradient-to-b from-green-600 to-lime-200',
  fire:'bg-gradient-to-b from-yellow-500 to-red-200',
  water:'bg-gradient-to-b from-blue-500 to-blue-200',
  bug:'bg-gradient-to-b from-lime-700 to-cyan-100',
  normal:'bg-gradient-to-b from-blue-200 to-orange-400',
  
  
  }
  
  const bordercolor={
    grass:'border-lime-200',
    fire:'border-yellow-500',
    water:'border-blue-200',
    bug:'border-yellow-500',
    normal:'border-orange-200',
    
    
    }
  const [pokemon, setpokemon] = useState()
  console.log(pokemonUrl)
  const types = pokemon?.types.slice(0, 2).map(type => type.type.name).join("/")
  useEffect(() => {

    axios
      .get(pokemonUrl)
      .then((res) => setpokemon(res.data))
      .catch((error) => console.log(error))
  }, [])


  return (
    <section className={`text-center rounded-xl  border-4  ${bordercolor[pokemon?.types[0].type.name]} ` }>
      <div className={ `relative rounded-xl border-2  h-[150px] ${ typecolor[pokemon?.types[0].type.name]} `} >
        <div className='absolute left-1/2 -bottom-4 w-[240px] -translate-x-1/2 ' >
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>

      </div>

      <section >
      
        <div>
          <h1 className='font-extrabold uppercase ' >
            {pokemon?.name}
          </h1>
          <h4 className='font-semibold capitalize'>{types}</h4>
          <span>Type</span>
        </div>
        <hr />
        <br />
        
        <section className='grid grid-cols-3 gap-2 p-2 capitalize font-semibold'>
        
          {
            pokemon?.stats.map((stat) => (<div key={stat.stat.name}>
              <h5>{stat.stat.name}</h5>
              <span>{stat.base_stat} </span>
            </div>))
          }
        </section>
      </section>
    </section>
  )
}
