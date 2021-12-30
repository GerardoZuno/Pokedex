import React from 'react'
import { useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import { PokemonFull } from '../interfaces/pokemonInterfaces'

const usePokemon = (id: string) => {

    const [isLoading, setisLoading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)
 
  const loadPokemon = async() => {
      const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon(resp.data)
      setisLoading(false)
  }


   React.useEffect(() => {
 loadPokemon()
       
   }, [])

    return {
      isLoading,
      pokemon,
    }
}

export default usePokemon
