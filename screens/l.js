import React,{Component} from 'react'
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity,Alert,Image} from 'react-native';
// import { styles } from 'styled-system';


export default class Income extends Component {
    render(){
        return (
<View style={{flex: 1,backgroundColor:'#2980b9'}}>
    <View style={{flex: 1}}>
        <Text>This is my header</Text>
    </View>
    <View style={{flex: 10}}>
        
    </View>
</View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9',
        alignItems: 'center',
        justifyContent: 'center',
  
      }
    })