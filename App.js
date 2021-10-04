import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/signIn';
import Login from './components/login';
import Share from './components/share';

export function Home( { navigation }) {

  return (
    <View style={styles.head}>
      <Text>WELCOME</Text>
      <Button title='Login' 
      onPress={()=>{
        navigation.navigate('Login');
      }} />
      <Button onPress={()=> {
        navigation.navigate('Sign in')
      }} title="Sign in" />
      <Button title='Exit'
        onPress={()=>{
          Alert.alert('Are You Sure ?', 'You are about to exit', [{text:'Adieu'}]);
        }} />
    </View>);
}

const Stack = createNativeStackNavigator();

function App() {


    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='Sign in' component={SignIn} />
          <Stack.Screen name='Share' component={Share} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  

}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },
});

export default App;