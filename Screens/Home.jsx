import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        activeColor="#292a51"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#f3f3f3' }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default HomeScreen;