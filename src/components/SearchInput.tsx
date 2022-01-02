import React, { useState } from 'react';
import { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebounce from '../hooks/useDebounce';

interface Props {
     style?: StyleProp<ViewStyle>,
     onDebounce: (value: string) => void
      
}

const SearchInput = ({style, onDebounce}: Props) => {

  const [textValue, settextValue] = useState('')

   const debouncedValue = useDebounce(textValue, 500)


   useEffect(() => {
       onDebounce(debouncedValue.debouncedValue)  
       return () => {
        
      }    
   }, [debouncedValue])


  return (
    <View
      style={{
        ...styles.container,
        ...style as any
      }}>
      <View style={styles.textBackground}>
        <TextInput
          style={styles.textInput}
          placeholder="Buscar pokemon"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={28}
          value={textValue}
          onChangeText={settextValue}
        />

        <Icon
          name="search-outline"
          color="white"
          size={30}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
  },
  textBackground: {
    zIndex: 999,
    left: 0,
    right: 0,
    marginTop: 30,
    backgroundColor: 'teal',
    opacity: 0.9,
    color: 'black',
    borderRadius: 50,
    height: 50,
    paddingRight: 35,
    paddingLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
      marginRight: 20,
      position: 'absolute',
      right: -12, 
  }
});
