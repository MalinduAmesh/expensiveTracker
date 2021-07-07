import React,{Component} from 'react'
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity,Alert,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-date-picker'


export default class Income extends Component {

    constructor(props){
        super(props)
        this.state = {date:"2016-05-15"}
      }
     
      render(){
    return (
        <View style={styles.container}>
            <Animatable.View animation='zoomInUp'>

            </Animatable.View>

            <Animatable.View style={styles.HeaderMainContain} animation='zoomInUp'>

            <Text style={styles.logo}>Add Income</Text>


            <DatePicker mode="datetime"/>

            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Income" 
                placeholderTextColor="#353b48"
                // autoCapitalize="none"
                onChangeText={(text) => this.setState({ email: text })}

                />

            </View>

            {/* <View style={styles.inputView} > */}
              {/* <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Date & Time" 
                placeholderTextColor="#353b48"
                // autoCapitalize="none"
                onChangeText={(text) => this.setState({ password: text })}
     
                /> */}
         

            {/* </View> */}

            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Amount" 
                placeholderTextColor="#353b48"
                // autoCapitalize="none"
                onChangeText={(text) => this.setState({ password: text })}
     
                />

            </View>

            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Category" 
                placeholderTextColor="#353b48"
                // autoCapitalize="none"
                onChangeText={(text) => this.setState({ password: text })}
     
                />

            </View>

            <TouchableOpacity rounded style={styles.loginBtn} onPress={() =>{
              this.userLogin();
              alert('Login Success');
              this.props.navigation.navigate('DrawerContent')
              // this.props.navigation.navigate('SignInScreen') 
              }} >
            {/* // onPress={()=>{this.props.navigation.navigate('SignInScreen')}} */}

            <Text style={styles.loginText1} >Sign In</Text>

              </TouchableOpacity>
    
            </Animatable.View>

        </View>
    )
}
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
  
      },
      HeaderMainContain: {
        backgroundColor: '#ffffff',
        width: 412,
        height: 806,
        marginTop:0,
        bottom:0,
        borderRadius:15,
        // borderTopLeftRadius:80,
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
        color:"#2c3e50",
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
        padding:30
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        backgroundColor:'#5567FE',
        width:"50%",
        borderRadius:15,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft:90,
        marginBottom:10
      },
})
