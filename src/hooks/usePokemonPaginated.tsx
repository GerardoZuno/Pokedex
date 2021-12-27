import {useRef} from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import { PokemonPaginatedResponse,  Result,  SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadedPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    console.log(resp.data)
    mapPokemonList(resp.data.results)
    nextPageUrl.current = resp.data.next
  };

 const mapPokemonList = (pokemonList: Result[]) => {
     pokemonList.forEach((pokemon => console.log(pokemon.name )))
 }

  useEffect(() => {
    loadedPokemons();
  }, []);

  
  return {
      setSimplePokemonList
  };
};

export default usePokemonPaginated;
