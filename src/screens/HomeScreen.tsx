import {
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

const HomeScreen = () => {
    const navigation = useNavigation();
    const {top} = useSafeAreaInsets()
    const {} = usePokemonPaginated()

  return (
    <View style={styles.globalMarginal}>
      <Text>HomeScreen</Text>
      <Image 
      source={require('../assets/pokebola.png')}
      style={styles.pokebolaBG}/>
      {/* <Button
              onPress={() => navigation.navigate('PokemonScreen' as any)}
              title="Pokemon"
      /> */}
      <Text style={{
          ...styles.titulo,
          ...styles.globalMarginal,
          top: top + 20
      }}>
          Pokedex
      </Text>
    </View>
  );
};

export default HomeScreen;
