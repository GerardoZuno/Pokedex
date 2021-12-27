import {
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon name="body-outline" size={40} color="red"/>
      <Button
              onPress={() => navigation.navigate('PokemonScreen' as any)}
              title="Pokemon"
      />
    </View>
  );
};

export default HomeScreen;
