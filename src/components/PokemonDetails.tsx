import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        <Text
          style={{
            ...styles.title,
          }}>
          Types
        </Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text
          style={{
            ...styles.title,
          }}>
          Peso
        </Text>
        <Text
          style={{
            ...styles.regularText,
          }}>
          {pokemon.weight} Kg
        </Text>
      </View>

      <View
        style={{
          ...styles.container,
        }}>
        <Text
          style={{
            ...styles.title,
          }}>
          Sprites
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={{
            ...styles.basicSprite,
          }}
        />

        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={{
            ...styles.basicSprite,
          }}
        />

        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={{
            ...styles.basicSprite,
          }}
        />

        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={{
            ...styles.basicSprite,
          }}
        />

      
      </ScrollView>
      <View
        style={{
          ...styles.container,
        }}>
      <Text
          style={{
            ...styles.title,
          }}>
          Habilidades Base
        </Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
     </View>   

     <View
        style={{
          ...styles.container,
        }}>
      <Text
          style={{
            ...styles.title,
          }}>
              Movimientos
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
        
     </View>  

     
     <View
        style={{
          ...styles.container,
        }}>
      <Text
          style={{
            ...styles.title,
          }}>
              Stats
        </Text>
        <View style={{flexDirection: 'column',}}>
          {pokemon.stats.map((stat, i) => (
        <View style={{flexDirection: 'row'}}
        key={stat.stat.name + i}>

            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
                width: 150,
                fontStyle: 'italic',
              }}
               >
              {stat.stat.name}
            </Text>

            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
                fontWeight: 'bold',
              }}
              >
              {stat.base_stat}
            </Text>
            </View>  
 
          ))}
        </View>
        <View style={{
            marginBottom: 50,
            marginTop: 30,
            alignItems: 'center',
        }}>
            <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite}/>
        </View>
        
     </View>  


     
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
    color: 'black',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
