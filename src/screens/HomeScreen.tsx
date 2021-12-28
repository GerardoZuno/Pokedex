import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Image, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadedPokemons} = usePokemonPaginated();

  return (
    <View style={styles.globalMarginal}>
      <Text>HomeScreen</Text>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      {/* <Button
              onPress={() => navigation.navigate('PokemonScreen' as any)}
              title="Pokemon"
      /> */}
     
      <FlatList        
        data={simplePokemonList}
        ListHeaderComponent={() => (
            <Text style={{
                ...styles.titulo,
                ...styles.globalMarginal,
                top: top + 20,
                marginBottom: top + 20
            }}>
                Pokedex
            </Text> 
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (<PokemonCard pokemon={item} /> )}
        keyExtractor={pokemon => pokemon.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setTimeout(() => {
            loadedPokemons();
          }, 1000);
        }}
        ListFooterComponent={() => (
          <ActivityIndicator
            size={30}
            color="red"
            style={{
              height: 100,
              width: 100,
              borderColor: 'blue',
            }}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
