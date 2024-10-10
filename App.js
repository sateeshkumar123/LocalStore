/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContextProvider, { AuthContext } from './Helpers/auth-context';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitleAlign: 'center', headerShown: false, }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center', headerShown: false, }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
