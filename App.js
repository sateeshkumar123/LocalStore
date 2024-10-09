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

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitleAlign: 'center', headerShown: false, }} />
    </Stack.Navigator>
  );
}

// const HeaderTitleWithIcon = (title) => {
//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Image source={require('./assets/d1.png')} style={{ marginRight: 4, width: 25, height: 25 }} />
//       <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>{title}</Text>
//     </View>
//   );
// };

function AuthenticatedStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center', headerShown: false}} />

      {/* <Stack.Screen name="Settings" component={SettingsScreen} options={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        // presentation:'modal',
        headerTitleAlign: 'center',
        headerTintColor: '#f3f3f3',
        headerBackTitleVisible: false,
        animationEnabled: true,
        headerBackImage: () => (
          <AntDesign name="left" style={{ marginLeft: 0 }} size={28} color="white" />
        ),
      }} /> */}


    </Stack.Navigator>

  );
}

function Navigation() {

  const authCtx = useContext(AuthContext);

  console.log(authCtx);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

const App = () => {

  useEffect(() => {
    //SplashScreen.hide();
   
  });


  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
};

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
