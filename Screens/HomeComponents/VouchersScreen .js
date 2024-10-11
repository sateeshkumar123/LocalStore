import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const vouchers = [
    {
        id: '1',
        title: 'GET UPTO 60% OFF',
        description: 'On all Beauty Products',
        image: require('../../assets/3.jpeg'),  // Replace with your local image path
        code: 'FASHION60',
        codeBackgroundColor: '#7A3E9D', // Purple background for the code button
    },
    {
        id: '2',
        title: 'PRICE SLASH 60% OFF',
        description: 'On all Beauty Products',
        image: require('../../assets/3.jpeg'),  // Replace with your local image path
        code: 'FASHION60',
        codeBackgroundColor: '#27AE60', // Green background for the code button
    },
    // Add more voucher data as needed
];

const VoucherCard = ({ voucher }) => {
    return (
        <View style={styles.card}>
            <Image source={voucher.image} style={styles.image} />
            <Text style={styles.title}>{voucher.title}</Text>
            <Text style={styles.description}>{voucher.description}</Text>
            <TouchableOpacity style={[styles.codeContainer, { backgroundColor: voucher.codeBackgroundColor }]}>
                <Text style={styles.codeText}>{voucher.code}</Text>
            </TouchableOpacity>
        </View>
    );
};

const VouchersScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>AVAILABLE VOUCHERS</Text>
            </View>
            <FlatList
                data={vouchers}
                renderItem={({ item }) => <VoucherCard voucher={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.voucherList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FC',  // Light background color
        paddingBottom: 10,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',                  // Text color for visibility
        backgroundColor: '#000',          // Padding around the text
        padding: 8,
        borderBottomLeftRadius: 10,      // Rounded bottom left corner
        borderTopRightRadius: 10,     // Rounded bottom right corner
      },
    
    voucherList: {
        paddingLeft: 16,
    },
    card: {
        width: 240,  // Matches the proportion shown in your image
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 16,
        marginRight: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 140,  // Adjust this based on your image dimensions
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#7A7A7A',
        marginBottom: 15,
        textAlign: 'center',
    },
    codeContainer: {
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 30,
    },
    codeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default VouchersScreen;
