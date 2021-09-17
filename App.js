import React, { Component,useEffect,useMemo,useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator,StatusBar,StyleSheet,View} from 'react-native';
import { AuthContext } from './contexts/AuthContext';
import HomeScreen from './screens/HomeScreen'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import LoadingScreen from './screens/LoadingScreen';
import SignUp from './screens/SignUp';
import RegistrationScreen from './screens/RegistrationScreen';
import Income from './screens/Income';
import Music from './screens/Music';
import CustomerData from './screens/CustomerData';
import Dropdown2 from './screens/Dropdown'
import LoadingScreen2 from './screens/LoadingScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// import Icon from 'react-native-ionicons';
function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="DrawerContent" component={DrawerContent} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Income" component={Income} />
      </Stack.Navigator>
    </NavigationContainer>

// {/* <LoadingScreen2></LoadingScreen2> */}

    // <Music></Music>

    // <Income></Income>
    
    // <CustomerData></CustomerData>

    // <Expen></Expen>
  );


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2c3e50'
  
  }
})
export default App
