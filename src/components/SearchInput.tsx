import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <View style={styles.textBackground}>
        <TextInput
          style={styles.textInput}
          placeholder="Buscar pokemon"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={28}
        />

        <Icon
          name="search-outline"
          color="grey"
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
    marginBottom: 10
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
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
    color: 'black',
    fontSize: 18,
  },
  icon: {
      marginRight: 20,
      position: 'absolute',
      right: -12, 
  }
});
