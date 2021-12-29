import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useRef } from 'react';

const windowWitdh = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true)

  const getColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {});

    let primary;

    switch (colors.platform) {
      case 'android':
        primary = colors.dominant;

        break;

      case 'ios':
        primary = colors.primary;

      default:
        break;
    }


  if(isMounted) {
    setBgColor(primary || 'grey');

  }else {
      return
  }


    return [primary];
  };

  useEffect(() => {
    getColors(pokemon.picture);

    //return se dispara cuando el componente se desmonta
    return () => {
      isMounted.current = false
    } 
  }, []);

  return (
    <TouchableOpacity style={{}} activeOpacity={0.8}>
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={{
            width: 150,
            height: 150,
            zIndex: 2,
            justifyContent: 'center',
          }}
        />
        <View>
          <Text style={styles.id}># {pokemon.id}</Text>
        </View>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignContent: 'center',
    backgroundColor: 'grey',
    height: 200,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    marginHorizontal: 8,
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    textAlign: 'left',
    marginTop: -10,
    marginLeft: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.7,
    zIndex: 1,
  },
});

export default PokemonCard;
