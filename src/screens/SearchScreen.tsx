import React from 'react'
import { View, Text, Dimensions, Platform, ActivityIndicator, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import SearchInput from '../components/SearchInput'
import usePokemonSearch from '../hooks/usePokemonSearch'
import { styles } from '../theme/appTheme'

const SearchScreen = () => {

   const {top} = useSafeAreaInsets()
   const {isFetching, simplePokemonList} = usePokemonSearch()

console.log(simplePokemonList)
   if (isFetching) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <ActivityIndicator size={50}/>
            </View>
        )
   }
    return (
        <View style={{
            flex: 1,
             marginTop: (Platform.OS === 'ios') ? top : top + 10,
             marginHorizontal: 20
              }}>

           <SearchInput /> 

              <FlatList 
               data={simplePokemonList}
          ListHeaderComponent={() => (
            <Text
              style={{
                ...styles.titulo,
                ...styles.globalMarginal,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          keyExtractor={pokemon => pokemon.id}
          
        />

        </View>
    )
}

export default SearchScreen
