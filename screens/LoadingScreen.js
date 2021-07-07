/* eslint-disable prettier/prettier */
import React, { Component, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = (props) => {
	// class LoadingScreen extends Component {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {};
	// 	}
	const detectLogin = async () => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			props.navigation.replace('DrawerContent');
		} else {
			props.navigation.replace('SignUp');
		}
	};

	useEffect(() => {
		detectLogin();
	}, []);

	return (
		<View style={styles.loading}>
			<ActivityIndicator size="large" color="green" />
		</View>
	);
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#ecf0f1'
	}
});

export default LoadingScreen;
