import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import {View, Text, Platform, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import {styles} from '../theme/appTheme';

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

  useEffect(() => {

    if(term.length === 0) {
         return setPokemonFiltered([])
    }
    if(isNaN (Number(term))) {
      setPokemonFiltered( simplePokemonList.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase() ) ) )
     } else {
       const pokemonById = simplePokemonList.find(
        poke => poke.id === term)
       setPokemonFiltered(
             ( pokemonById ) ? [pokemonById] : []
        )
      
     }


     
  }, [term])


  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        //  marginTop: (Platform.OS === 'ios') ? top : top + 10,
        marginHorizontal: 20,
      }}>    
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
        }}
      />

      <FlatList
        data={pokemonFiltered}
        ListHeaderComponent={() => (
          <Text
            style={{
              ...styles.titulo,
              ...styles.globalMarginal,
              top: top + 20,
              marginBottom: top + 20,
              marginTop: top + 10,
            }}>
            {term}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        keyExtractor={pokemon => pokemon.id}
      />
    </View>
  );
};

export default SearchScreen;
