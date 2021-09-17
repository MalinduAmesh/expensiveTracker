/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncingPreloader from 'react-native-bouncing-preloader';

const LoadingScreen = (props) => {

	const detectLogin = async () => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			props.navigation.replace('DrawerContent');
		} else {
			props.navigation.replace('SignUp');
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
		detectLogin();

	}, 3000);
	}, []);
		
	return (

		<View style={styles.loading}>

		<Image
          style={styles.tinyLogo}
          source={require('../assets/popUp.gif')}
          />
		  <Text style={styles.budget}>My Budget Planner </Text>
			{/* <ActivityIndicator size="large" color="green" /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#23252A'
	},
	tinyLogo: {
		position:'relative',
		top:0,
		width: 170,
		height:240
	  },
	  budget:{
		  fontSize:30,
		  color:'#ffffff',
		  fontWeight:'bold',
		  marginTop:20
	  }
});

export default LoadingScreen;
