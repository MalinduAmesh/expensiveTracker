import React, { Component } from 'react'
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity,Alert,Image,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import UrlConfig from '../config/UrlConfig';
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



// import Users from '../model/users';


export default class  SignUp  extends Component  {


  constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	userLogin = async () => {
		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		fetch(`${UrlConfig.BASE_URL}/customer/sign-in`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userData)
			
		})
			.then((response) => response.json())
			.then(async (data) => {
				try {
					await AsyncStorage.setItem('token', data.token);
          this.props.navigation.navigate('DrawerContent')
				} catch (e) {
					console.log('error ', e);
          alert('Login Erorr');
				}

				
				console.log(userData);
			})
			.catch((error) => {
				console.log(error);
				alert('Login Failed');
				console.log(userData);
			});
	};


  render() {
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor='#095587' barStyle="dark-content"/>
        <Animatable.View>
          <Image
          style={styles.tinyLogo}
          source={require('../assets/logo11.png')}
          />
        </Animatable.View>
        <Animatable.View style={styles.HeaderMainContain} animation='fadeInUpBig'>
        <Text style={styles.logo}>Welcome</Text>

         <Neomorph inner style={styles.neomorph4} >
        <MaterialIcons name="email" size={20} color="#ECF0F3" style={styles.searchIcon} />
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#ECF0F3"
            // autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text })}

            />

        </Neomorph>

        <Neomorph inner  style={styles.neomorph4} >
        <FontMaterial name="lock" size={20} color="#ECF0F3" style={styles.searchIcon} />
        <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#ECF0F3"
            // autoCapitalize="none"
            onChangeText={(text) => this.setState({ password: text })}
 
></TextInput>
        </Neomorph>


        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>


        <Neomorph inner style={styles.neomorph41}>
          <TouchableOpacity  onPress={() =>{
          this.userLogin();
          }} >
        <Text style={styles.loginText1} >Sign In</Text>

          </TouchableOpacity>
          </Neomorph>

        <TouchableOpacity onPress={()=> this.props.navigation.navigate('RegistrationScreen')}>

          <Text style={styles.LoginMain}>Don't Have An Account ?</Text>
          <Text style={styles.loginText} >Signup</Text>
        </TouchableOpacity>

        </Animatable.View>
  
      </View>
    )
    }
}
  // const [data, setData] = React.useState({
  //   username: '',
  //   password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   isValidUser: true,
  //   isValidPassword: true,
  // });

  // const  {signIn} = React.useContext(AuthContext);

//   const textInputChange = (val) => {
//     if( val.trim().length >= 4 ) {
//         setData({
//             ...data,
//             username: val,
//             check_textInputChange: true,
//             isValidUser: true
//         });
//     } else {
//         setData({
//             ...data,
//             username: val,
//             check_textInputChange: false,
//             isValidUser: false
//         });
//     }
// }

// const handlePasswordChange = (val) => {
//   if( val.trim().length >= 8 ) {
//       setData({
//           ...data,
//           password: val,
//           isValidPassword: true
//       });
//   } else {
//       setData({
//           ...data,
//           password: val,
//           isValidPassword: false
//       });
//   }
// }


// const updateSecureTextEntry = () => {
//   setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry
//   });
// }

// const handleValidUser = (val) => {
//   if( val.trim().length >= 4 ) {
//       setData({
//           ...data,
//           isValidUser: true
//       });
//   } else {
//       setData({
//           ...data,
//           isValidUser: false
//       });
//   }
// }

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  neomorph41: {
    marginLeft:100,
    marginTop:-30,
    // marginBottom:10,

    borderRadius: 20,
    shadowRadius: 8,
    // swapShadows:10,
    backgroundColor: '#095587',
    width: 200,
    height: 60,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: -8, height: -8 },


  },
  neomorph4: {
    marginLeft:40,
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
  neomorph5: {
    borderRadius: 80,
    shadowRadius: 8,
    backgroundColor: '#0370B8',
    width: 160,
    height: 160,
    shadowOffset: { width: -8, height: -8 },
  },
    container: {
      flex: 1,
      backgroundColor: '#095587',
      alignItems: 'center',
      justifyContent: 'center',

    },
    tinyLogo: {
      position:'relative',
      top:100,
      width: 140,
      height:140
    },
    HeaderMainContain: {
      backgroundColor: '#23252A',
      width: 412,
      height: 550,
      marginTop:186,
      bottom:0,
      borderTopLeftRadius:80,
      elevation: 5,
      shadowColor: '#4949a3',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
  },
    logo:{
      fontWeight:"bold",
      fontSize:25,
      color:"#ECF0F3",
      marginBottom:40,
      marginTop:40,
      marginLeft:43
    },
    inputView:{
      width:"80%",
      backgroundColor:"#d1d8e0",
      borderRadius:15,
      height:60,
      marginBottom:20,
      marginLeft:40,
      justifyContent:"center",
      // padding:30
    },
    inputText:{
      color:"#ECF0F3",
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
     
    },
    forgot:{
      color:'#ecf0f1',
      fontSize:11,
      marginLeft:266,
      marginBottom:90,
      marginTop:20
    },

    loginBtn:{
      backgroundColor:'#0370B8',
      width:"50%",
      borderRadius:15,
      height:60,
      alignItems:"center",
      justifyContent:"center",
      marginTop:0,
      marginLeft:0,
      marginBottom:10
    },
    loginText:{
      color:'#0370B8',
      width:60,
      position:'relative',
      left:260,
      bottom:21,
      // fontSize:20

    },
    LoginMain:{
      color:'#ECF0F3',
      marginLeft:80,
      marginTop:20

    },
    loginText1:{
      color:'white'
    }
  });
  
