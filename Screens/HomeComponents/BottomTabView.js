import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import React, {useState} from 'react';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';
const Tab = createBottomTabNavigator();

export default function BottomNavigationView() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      showToolbar="false"
      screenOptions={{
        tabBarActiveTintColor: '#292a51',
      }}>
      <Tab.Screen
        name="Feed"
        component={ProfileScreen}
        initialParams={{ showToolbar: true }} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="grid"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'offers',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Rewards',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
