import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import Login from './components/login';


const App = () => {
  
  

  return (
    <View style={styles.head}>
      <Login />
    </View>);

};

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },
});

export default App;