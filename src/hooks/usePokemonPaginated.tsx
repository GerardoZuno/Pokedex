import {useRef} from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import { PokemonPaginatedResponse,  Result,  SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {
    const [isLoading, setisLoading] = useState(true);


    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadedPokemons = async () => {
      setisLoading(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    mapPokemonList(resp.data.results)
    nextPageUrl.current = resp.data.next
  };

 const mapPokemonList = (pokemonList: Result[]) => {
     const newPokemonList: SimplePokemon[] =
      pokemonList.map(({name, url}) => {
        const urlParts = url.split('/')
        const id = urlParts[urlParts.length -2]
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

       return {
           id,
           picture,
           name,
       }

     })
     setSimplePokemonList([
         ...simplePokemonList,
         ...newPokemonList

     ])
     setisLoading(false)
    }

  useEffect(() => {
    loadedPokemons();
  }, []);

  
  return {
      simplePokemonList,
      loadedPokemons,
      isLoading
  };
};

export default usePokemonPaginated;
