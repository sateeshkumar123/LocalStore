// src/screens/ProfileScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, Dimensions } from 'react-native';
import Toolbar from '../Helpers/Toolbar';
import HomeToolbar from './HomeComponents/HomeToolBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VouchersScreen from './HomeComponents/VouchersScreen ';
import { ScrollView } from 'react-native-gesture-handler';

const NUM_COLUMNS = 3;
const { width } = Dimensions.get('window'); // Get the width of the screen

function ProfileScreen({ navigation }) {

  const categories = [
    { id: '1', title: 'Veggies', backgroundColor: '#d3e6f6', image: require('../assets/veggies.png') }, // Replace with correct image paths
    { id: '2', title: 'Fruits', backgroundColor: '#eff6d3', image: require('../assets/fruits.png') },
    { id: '3', title: 'Pharmacy', backgroundColor: '#f6d3e9', image: require('../assets/pharmacy.png') },
    { id: '4', title: 'Bakery', backgroundColor: '#d3f6df', image: require('../assets/bread.png') },
    { id: '5', title: 'Fashion', backgroundColor: '#fddde4', image: require('../assets/fasion.jpeg') },
    { id: '6', title: 'Dining', backgroundColor: '#d3e6f6', image: require('../assets/dining.png') },
  ];
  const handleMenuPress = () => {
    // Handle left icon press

  };

  const handleNotificationPress = () => {
    // Handle right icon press
    //navigation.navigate('Bottom');
    //navigation.push('Settings')

  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,  // Hides the default React Navigation header
    });
  }, [navigation]);

  const renderCategoryItem = ({ item }) => (
    <View style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <HomeToolbar
        locationText="Road no 4, Banjarahills, Hyderabad"
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
      />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          {/* <Ionicons name="search" size={24} color="#B0B0B0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for groceries"
            placeholderTextColor="#B0B0B0"
          /> */}

          <View style={styles.searchView}>
            <Ionicons name="search" size={24} color="#2C2F6D" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for groceries"
              placeholderTextColor="#B0B0B0"
            />
          </View>

        </View>

        <ScrollView>
          {/* Selected Categories */}
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Selected Categories</Text>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              numColumns={NUM_COLUMNS}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryList}
            />
          </View>
          <VouchersScreen />

        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Light gray background
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#2C2F6D',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center', // Vertically center the input and icon
  },
  searchView: {
    flexDirection: 'row', // Aligns input and icon horizontally
    alignItems: 'center', // Vertically center the input and icon
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginHorizontal: 10, // Add margins for better positioning
    elevation: 3,
    borderRadius: 15,
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  searchInput: {
    flex: 1, // Takes up the remaining space
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10, // Spacing between the icon and input
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2F6D',
  },
  categoryList: {
    paddingLeft: 16,
    paddingTop: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  categoryItem: {
    borderRadius: 15,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    marginRight: 16,
    elevation: 2,
    width: width * 0.28, // 28% of screen width
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C2F6D',
  },
});
export default ProfileScreen;
