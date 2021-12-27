import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor: 'white'
        }
    }}
    
    >
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'HomeScreen',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="PokemonScreen"
        options={{
          title: 'PokemonScreen',
        }}
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
