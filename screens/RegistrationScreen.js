import React,{Component} from 'react'
import {View,Image, Text,Button,TextInput,StyleSheet,TouchableOpacity,KeyboardAvoidingView ,Keyboard ,TouchableWithoutFeedback,StatusBar  } from 'react-native'
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';
import { AuthContext } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UrlConfig from '../config/UrlConfig';
import * as Animatable from 'react-native-animatable';
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { backgroundColor } from 'styled-system';
export default class RegistrationScreen extends Component {

    constructor(props) {
		super(props);
		this.state = {
			name: '',
			pnumber: '',
			email: '',
			password: ''
		};
	}
    
    submitUserData = async (props) => {
		const userData = {
			name: this.state.name,
			pnumber: this.state.pnumber,
			email: this.state.email,
			password: this.state.password
		};


		fetch(`${UrlConfig.BASE_URL}/customer/register`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userData)
		})
			.then((response) => response.text())
			.then(async (data) => {
				try {
					await AsyncStorage.setItem('token', data.token);
				} catch (e) {
					console.log('error ', e);
				}

				alert('success Registerd');
				console.log(userData);
			})
			.catch((error) => {
				console.log(error);
				alert('Registerdtion Failed');
				console.log(userData);
			});


    }

    render() {
    return (
		<KeyboardAvoidingView style={styles.container}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
           <StatusBar backgroundColor='#23252A' barStyle="light-content"/>

         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		 <View style={styles.inner}>
		    <Animatable.View animation='zoomInUp'
    >
{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <Text style={styles.title}>SIGN UP</Text>

			<Animatable.View>
          <Image
          style={styles.tinyLogo}
          source={require('../assets/logo11.png')}
          />
        </Animatable.View> 



            <Neomorph inner style={styles.neomorph4} >
			<FontAwesome name="user" size={20} color="#ECF0F3" style={styles.searchIcon} />
					<TextInput
						style={styles.inputText}
						placeholder="User Name"
						placeholderTextColor="#f5f6fa"
						onChangeText={(name) => this.setState({ name })}
						// onChangeText={text => this.setState({name: text})}
					/>
				</Neomorph>

                <Neomorph inner style={styles.neomorph4} >
				<MaterialIcons name="email" size={20} color="#ECF0F3" style={styles.searchIcon} />
					<TextInput
						style={styles.inputText}
						placeholder="Email"
						placeholderTextColor="#f5f6fa"
						onChangeText={(email) => this.setState({ email })}
						// onChangeText={text => this.setState({email: text})}
					/>
				</Neomorph>

				<Neomorph inner style={styles.neomorph4} >
				<MaterialIcons name="contacts" size={20} color="#ECF0F3" style={styles.searchIcon} />
					<TextInput
						style={styles.inputText}
						placeholder="Contact"
						placeholderTextColor="#ffffff"
						onChangeText={(pnumber) => this.setState({ pnumber })}
						// onChangeText={text => this.setState({pnumber: text})}
					/>
				</Neomorph>

				<Neomorph inner style={styles.neomorph4} >
				<FontAwesome name="lock" size={20} color="#ECF0F3" style={styles.searchIcon} />
					<TextInput
						secureTextEntry
						style={styles.inputText}
						placeholder="Password"
						placeholderTextColor="#f5f6fa"
						onChangeText={(password) => this.setState({ password })}
						// onChangeText={text => this.setState({password: text})}
					/>
				</Neomorph>

                <Neomorph inner style={styles.neomorph4} >
				<FontAwesome name="lock" size={20} color="#ECF0F3" style={styles.searchIcon} />
					<TextInput
						secureTextEntry
						style={styles.inputText}
						placeholder="Confirm Password"
						placeholderTextColor="#f5f6fa"
					
						// onChangeText={text => this.setState({password: text})}
					/>
				</Neomorph>

				<Neomorph inner style={styles.neomorph41} >
             <TouchableOpacity rounded onPress={() =>{
                this.submitUserData();
				this.props.navigation.navigate('SignUp') 

              }} >


            <Text >SIGN UP</Text>

              </TouchableOpacity>
			  </Neomorph>
			  {/* </TouchableWithoutFeedback> */}
</Animatable.View>
</View>
</TouchableWithoutFeedback>
       </KeyboardAvoidingView>
    )
}
}


const styles = StyleSheet.create({

    container:{
        flex:1,
		backgroundColor:"#23252A",
		alignItems:'center',
    justifyContent: 'center',
    },
	tinyLogo: {
		width: 140,
		height:140,
		alignItems:'center',
		marginLeft:80,
		bottom:10
	  },
	neomorph41: {
		marginLeft:65,
		marginTop:40,
		// marginBottom:10,
	
		borderRadius: 20,
		shadowRadius: 8,
		// swapShadows:10,
		backgroundColor: '#0370B8',
		width: 200,
		height: 60,
	
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 8, height: 8 },
	
	
	  },
	neomorph4: {
		marginLeft:0,
		marginTop:20,
		// marginBottom:10,
	
		borderRadius: 20,
		shadowRadius: 1,
		// swapShadows:10,
		backgroundColor: '#23252A',
		width: 330,
		height: 60,
	
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 3, height: 4 },
	
	
	  },
	  searchIcon: {
		padding: 10,
	},
    title:{
		color:'#f5f6fa',
        marginBottom:32,
		fontSize:30
    },
    loginBtn:{
        backgroundColor:'#5567FE',
        width:"50%",
        borderRadius:15,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginLeft:0,
        marginBottom:0
      },

      inputText:{
		  color:"#ECF0F3",
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
      },
    loginBtton:{
        marginVertical:10,
        position:'relative',
        bottom:20
    },
	inner: {
		padding: 30,
		flex: 1,
		justifyContent: "space-around"
	  },

});
