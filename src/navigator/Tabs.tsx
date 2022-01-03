import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator, { RootStackParams } from './Tab1';
import SearchScreen from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import Tab2Screen from './Tab2';

const Tab = createBottomTabNavigator();


export const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,     
        tabBarActiveTintColor: '#5856D5',
        tabBarLabelStyle: {
            marginBottom: (Platform.OS === 'ios' ) ? 0 : 10
        },
        tabBarStyle: {
            backgroundColor: 'white',
            opacity: .92,
            borderWidth: 0,
            elevation: 0,
            height: (Platform.OS === 'ios' ) ? 80 : 60,
            position: 'absolute',

        }

    }}
    sceneContainerStyle={{
        backgroundColor: 'white',
        
    }}
        
    
    
    >

      <Tab.Screen
       name="Home"
       component={StackNavigator}
       options={{
           tabBarLabel: "Listado",
           tabBarIcon: (({color} ) => <Icon color={color} name="list-outline" size={25}/>)
       }}  />
      <Tab.Screen name="Settings" component={Tab2Screen} 
      options={{
        tabBarLabel: "Buscar",
        tabBarIcon: (({color} ) => <Icon color={color} name="search-outline" size={25}/>)
    }} />
    </Tab.Navigator>
  );
}