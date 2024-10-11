import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomTextComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.normalText}>
            By clicking on Login you are agreeing to{' '}
          </Text>
          <Text style={styles.boldText}>Our Terms{' '}</Text>
          <Text style={styles.normalText}> & </Text>
          <Text style={styles.boldText}>Conditions</Text>
        </View>

        <Text style={styles.versionText}>Version 5.0.3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take the full height
    justifyContent: 'flex-end', // Align to the bottom
    alignItems: 'center',
    paddingBottom: 20, // Adds some padding from the bottom
  },
  textContainer: {
    position: 'absolute', // Make it absolute so it stays at the bottom
    bottom: 0, // Align it to the bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: 400,
  },
  normalText: {
    color: 'white',
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  versionText: {
    color: 'white',
    fontSize: 10,
    marginTop: 8,
  },
});

export default BottomTextComponent;
