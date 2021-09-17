import React,{useEffect,useState} from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';


import{ AuthContext } from '../contexts/AuthContext'
import HomeStackScreen from './HomeScreen';
import UrlConfig from '../config/UrlConfig';
import Income1 from './Income';
import ExpenseScreen from './ExpenseScreen';
import CustomerData from './CustomerData';
import Linedchart from './Linedchart ';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';

function Home() {
    return (
      <HomeStackScreen></HomeStackScreen>
    );
  }
  
  function Income() {
    return (
      // <Linedchart></Linedchart>
      <Income1></Income1>
    );
  }


  
  function Expense() {
    return (
     <ExpenseScreen></ExpenseScreen>
    );
  }
  
  function CustomDrawerContent(props) {

    const [email,setEmail] = useState('loading');
    const Boiler = async ()=>{
       const token = await AsyncStorage.getItem('token');
     fetch(`${UrlConfig.BASE_URL}`,{
     headers:new Headers({
       Authorization:'Test ' + token,
     }),
     }).then(res=>res.text())
     .then(data=>{
       console.log(data);
       setEmail(data.email);
     }
     ).catch((err)=>{
       console.log(err);
     });
    };
 useEffect(()=>{
    Boiler();
 },[]);
 
    const logout = (props)=>{
       AsyncStorage.removeItem('token').then(()=>{
         props.navigation.replace('SignUp');
       });
    };

    return (
<View style={{flex:1,backgroundColor:'#23252A'}}>



<CustomerData></CustomerData>

<Neomorph inner style={styles.neomorph41} >
             <TouchableOpacity rounded onPress={() => logout(props)} >


            <Text style={styles.loginText1} >Sign Out</Text>

              </TouchableOpacity>
			  </Neomorph>
</View>
      
      // <DrawerContentScrollView {...props}>
      //   <DrawerItemList {...props} />
      //   <DrawerItem style ={styles.bottomDrawerSection} label="Sign Out" onPress={() => logout(props)} />
      // </DrawerContentScrollView>
    );
  }
  
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  
  function MyDrawer() {
    return (
      // <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
     
      //   <Drawer.Screen name="Home" component={Home} />
      //   <Drawer.Screen name="Income" component={Income} />
      //   <Drawer.Screen name="Expense" component={Expense} />
   
      // </Drawer.Navigator>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        
          tabBarIcon: ({ focused, color, size }) => {
            
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home-outline'
                  }
                  size={size}
                  color={color}
                />
                
              );
              
            } else if (route.name === 'Income') {
              return (
                <FontAwesome5
                  name={focused ? 'comments-dollar' : 'comment-dollar'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Expense') {
              return (
                <Ionicons
                  name={focused ? 'trending-down' : 'trending-down-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Setting') {
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0370B8',
          inactiveTintColor: '#7f8c8d',
          activeBackgroundColor: '#23252A',
          inactiveBackgroundColor: '#23252A',  
          // animationEnabled: true         
        }}
      >
        <Tab.Screen name="Home" component={Home} ></Tab.Screen>
        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Expense" component={Expense} />
        <Tab.Screen
          name="Setting"
           children={ props =><CustomDrawerContent {...props}/>} />
      </Tab.Navigator>
    );
  }



export default function DrawerContent() {

    

 return(

 
      <MyDrawer/>


 )
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 65,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    neomorph41: {
      marginLeft:110,
      marginTop:60,
      // marginBottom:10,
    
      borderRadius: 20,
      shadowRadius: 1,
      // swapShadows:10,
      backgroundColor: '#0370B8',
      width: 200,
      height: 60,
    
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: { width: -3, height: -4 },
    
    
      },
});