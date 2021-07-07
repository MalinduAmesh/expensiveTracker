import React, { Component,useEffect,useMemo,useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator,StatusBar,StyleSheet,View} from 'react-native';
import { AuthContext } from './contexts/AuthContext';
import HomeScreen from './screens/HomeScreen'

import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from './screens/RootStackScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import LoadingScreen from './screens/LoadingScreen';
import SignUp from './screens/SignUp';
import RegistrationScreen from './screens/RegistrationScreen';
import Income from './screens/Income';
import Isssss from './screens/l'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function App() {


  const [IsLoggedIn, setLogged] = useState(null);
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen options={{ headerShown: false }} name="LoadingScreen" component={LoadingScreen} />
    //     <Stack.Screen options={{ headerShown: false }} name="DrawerContent" component={DrawerContent} />
    //     <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
    //     <Stack.Screen options={{ headerShown: false }} name="RegistrationScreen" component={RegistrationScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Income></Income>

    <Isssss></Isssss>
  );


  // // if the user is authenicated or not
  // const [isLoading,setLoading] = React.useState(true);

  // // by this token we will validate our user
  // const [userToken,setuserToken] = React.useState(null);

//   initialLoginState = {
//     isLoading:true,
//     userName:null,
//     userToken:null 

//   }

//   loginReducer = (prevState,action)=>{

//     switch(action.type){
//       case 'RETRIVE_TOKEN' :
//         return {
//           ...prevState,
//           userToken:action.token,
//           isLoading:false,
//         };
//         case 'LOGIN' :
//           return {
//             ...prevState,
//             userName:action.id,
//             userToken:action.token,
//             isLoading:false,
//           };
//           case 'LOGOUT' :
//             return {
//               ...prevState,
//               userName:null,
//               userToken:null,
//               isLoading:false,
//             };
//             case 'REGISTER' :
//               return {
//                 ...prevState,
//                 userName:action.id,
//                 userToken:action.token,
//                 isLoading:false,
//               };
//     }
//   }

// const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState );

// const  authContext = React.useMemo(() =>({

//   signIn:async(foundUser) =>{

//       const userToken = String(foundUser[0].userToken);
//       const userName = foundUser[0].username;
      
//       try {
//         await AsyncStorage.setItem('userToken', userToken);
//       } catch(e) {
//         console.log(e);
//       }

//     console.log('USer Token',userToken)
//     dispatch({type:'LOGIN',id:userName,token:userToken})
//   },
//   signOut:async() =>{
//     // setuserToken(null);
//     // setLoading(false);
//     try {
//       await AsyncStorage.removeItem('userToken')
//     } catch (e) {
//       console.log(e)
//     }
//     dispatch({type:'LOGOUT'})

//   },
//   signUp:() =>{
//     setuserToken('asd');
//     setLoading(false);
//   }

// }));


// // User is logged in or not
//   useEffect(() => {

//     setTimeout(async()=>{
//       // setLoading(false);
//       let userToken;
//       userToken = null;
//       try {
//         userToken = await AsyncStorage.getItem('userToken')
//       } catch (e) {
//         console.log(e)
//       }
//       dispatch({type:'RETRIVE_TOKEN',token:userToken})
//     },1000)
//   }, []);


// if(loginState.isLoading){
//   return(
//     <View style ={styles.container}>
//       {/* <ActivityIndicator size="small" color="#0000ff" /> */}
//       {/* <StatusBar barStyle='default'></StatusBar> */}
//     </View>
//   );
// }

//   return (

//     <AuthContext.Provider value={authContext}>
//     <NavigationContainer>
//     {loginState.userToken !== null ? (
      
//       <Drawer.Navigator>
//       <Drawer.Screen name="DrawerContent" component={DrawerContent} />
//     </Drawer.Navigator>

//     )
//     :
//     <RootStackScreen></RootStackScreen>
//     }

//     </NavigationContainer>
//     </AuthContext.Provider>
    
//   )




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
