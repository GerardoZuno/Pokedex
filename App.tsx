import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/Tab1';
import { MyTabs } from './src/navigator/Tabs';



const App = () => {
  return (
        <NavigationContainer>
          {/* <StackNavigator/> */}
          <MyTabs />        
        </NavigationContainer>

  )
}

export default App
