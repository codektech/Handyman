import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/CustomerScreens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <View style={{width:'100%',height:'100%'}}>
      <HomeScreen/>
    </View>
  );
}

