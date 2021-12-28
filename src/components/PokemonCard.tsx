import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWitdh = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity style={{}} activeOpacity={0.6}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <View>
          <Text style={styles.id}># {pokemon.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'orange',
    height: 200,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    marginHorizontal: 10,
    opacity: 1,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  id: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: -10,
    marginRight: 10
  }
});

export default PokemonCard;
