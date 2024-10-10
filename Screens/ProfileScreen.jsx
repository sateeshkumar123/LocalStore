// src/screens/ProfileScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../Helpers/Toolbar';
function ProfileScreen() {

  const handleLeftIconPress = () => {
    // Handle left icon press

  };

  const handleRightIconPress = () => {
    // Handle right icon press
    //navigation.navigate('Bottom');
    //navigation.push('Settings')

  };

  return (
    <View style={{ flex: 1}}>
      <Toolbar
        title="DashBaord"
        onLeftIconPress={handleLeftIconPress}
        onRightIconPress={handleRightIconPress}
      />
      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
