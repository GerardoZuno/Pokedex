import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { pokemonApi } from '../api/pokemonApi';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id} = simplePokemon
  const {top} = useSafeAreaInsets();
const {isLoading, pokemon } = usePokemon(id)
console.log(pokemon)
  return (
    <View style={{
        flex: 1
    }}>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.9}
          style={{
            ...styles.backButton,
            top: top + 5,
          }}>
          <Icon size={60} name="arrow-back-outline" color="white" />
        </TouchableOpacity>

        <Text
          style={{
            ...styles.pokemonName,
            top: top + 55,
          }}>
                        {simplePokemon.name + '\n'}

           # {simplePokemon.id}
        </Text>

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{
              ...styles.pokeball
          }}
        />
        <FadeInImage
          uri={simplePokemon.picture}
          style={{
              ...styles.pokemonImage
          }}
         />
      </View>
      <View style={styles.loading}>
          <ActivityIndicator color={color} size={50}/>
      </View>
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomEndRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
      width: 250,
      height: 250,
      bottom: -20,
      opacity: 0.7
  },
  pokemonImage: {
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -15
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
