import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, Platform, FlatList, TouchableOpacity, Touchable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {styles} from '../theme/appTheme';
import { useRef } from 'react';
import PokemonCard from '../components/PokemonCard';


const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const isMounted = useRef(true)
 

  

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }

    //return se dispara cuando el componente se desmonta
    return () => {
      isMounted.current = false
    } 

  }, [term]);

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
        onDebounce={value => setTerm(value)}
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
                marginTop: top + 50,
              }}></Text>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) =>   <PokemonCard pokemon={item} /> }

          keyExtractor={pokemon => pokemon.id}
        />
      </View>
  );
};

export default SearchScreen;
