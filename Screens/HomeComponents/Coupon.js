// TicketButton.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Coupon = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ticketContainer}>
                {<View style={styles.leftCurve} />}
                <View style={styles.ticket}>
                    <Text style={styles.text}>FASHION60</Text>
                </View>
                {<View style={styles.rightCurve} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ticketContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ticket: {
        backgroundColor: '#6A37C5',  // Purple color similar to the image
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',  // White text color
        fontWeight: 'bold',
        fontSize: 18,
    },
    leftCurve: {
        width: 20,
        height: 40,
        backgroundColor: '#FFF',  // White background for the curve cutout
        borderTopRightRadius: 20,  // To make the right edge of the curve
        borderBottomRightRadius: 20,
        marginRight: -10,  // Overlap with the ticket
        backgroundColor: '#6A37C5',  // Purple to match ticket
    },
    rightCurve: {
        width: 20,
        height: 40,
        backgroundColor: '#FFF',  // White background for the curve cutout
        borderTopLeftRadius: 20,  // To make the left edge of the curve
        borderBottomLeftRadius: 20,
        marginLeft: -10,  // Overlap with the ticket
        backgroundColor: '#6A37C5',  // Purple to match ticket
    },
});

export default Coupon;
