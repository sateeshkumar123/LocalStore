import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can use Material Icons or any other icon library
const menu = require('../../assets/menu.png');

const HomeToolbar = ({ locationText, onMenuPress, onNotificationPress }) => {
    return (
        <View style={styles.container}>

            {/* Left Icon: Menu */}
            <TouchableOpacity onPress={onMenuPress}>
                <Image source={menu} style={{ width: 35, height: 40 }} resizeMode="contain" />
                {/* <Icon name="menu" size={28} color="#fff" /> */}
            </TouchableOpacity>

            {/* Center Text: Location */}
            <View style={styles.locationContainer}>
                <Text style={styles.locationLabel}>LOCATION</Text>
                <Text style={styles.locationText}>{locationText}</Text>
            </View>

            {/* Right Icon: Notification */}
            <TouchableOpacity onPress={onNotificationPress}>
                <Icon name="notifications" size={28} color="#fff" />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#2C2F6D',  // This dark blue background color matches the image
        elevation: 4,
    },
    locationContainer: {
        flex: 1, // This ensures the location text takes up the remaining space
        flexDirection: 'column',
        marginLeft:16
    },
    locationLabel: {
        color: '#FFA500',  // Orange color for "LOCATION" text
        fontSize: 12,
        fontWeight: 'bold',
    },
    locationText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeToolbar;
