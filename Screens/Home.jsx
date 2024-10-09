import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import {
    AppState,
    StyleSheet,
    SafeAreaView, Linking,
    View, ScrollView, FlatList, ActivityIndicator,
    Text, Image, Dimensions, TouchableOpacity,
    Alert,
    TextInput, StatusBar, Platform
} from "react-native";
import AppStatusBar from '../Helpers/AppStatusBar';
const THEME_COLOR = '#ffffff';

const HomeScreen = ({ navigation }) => {
    return (
        <>
          <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.bottomSafeArea}>
                <AppStatusBar backgroundColor={THEME_COLOR} barStyle="default" />
                </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreen;
