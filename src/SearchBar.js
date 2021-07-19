import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Keyboard } from 'react-native'

const SearchBar = ({ setActiveURL, searchURL, setSearchURL }) => (
  <View style={styles.container}>
    <View style={styles.button}>
      <Button title='Перейти' onPress={() => {
          setActiveURL(searchURL);
          Keyboard.dismiss();
        }}/>
    </View>
    <TextInput style={styles.input} onChangeText={text => setSearchURL(text)} value={searchURL}/>
  </View>
)


export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#736fd9'
  },

  button: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10
  },

  input: {
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingLeft: 10,
    flex: 4,
    marginRight: 10,
  }
})