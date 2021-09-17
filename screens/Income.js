import React,{useState,useEffect,useContext} from 'react'
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity,Alert,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UrlConfig from '../config/UrlConfig';
import DropDownPicker from 'react-native-dropdown-picker';
import { TransactionContext } from "../contexts/TransactionContext";
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Income() {

  // const [description, setDescription] = useState('');
	// const [amount, setAmount] = useState('');

  // Load Month drop down menu box
  const data = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
  ];

  const [categorie, setcategorie] = useState('');
  const [outgoin, setOutGoin] = useState('');
	const [gigs, setGigs] = useState([{categorie, outgoin}]);
	const [total, setTotal] = useState(0);
  const [fullIncome,setFullIncome] = useState(0);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const [_id, set_id] = useState('');
	const [income, setIncome] = useState('');
	const [model, setModel] = useState(false);

  const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState(true);

	

// Set new Date to the calender
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getUserData = async () => {
 
    // making Flat list
    setGigs([
      ...gigs,
      {
        outgoin:outgoin,
        categorie:categorie,
      },
    ]);
  
    setcategorie('');
    setOutGoin('');
  
// Post income data to the table
		const token = await AsyncStorage.getItem('token');
		fetch(`${UrlConfig.BASE_URL}`, {
			headers: new Headers({
				Authorization: 'Test ' + token
			})
		})
			.then((res) => res.text())
			.then((data) => {
        console.log("Print What Data",data)
				fetch(`${UrlConfig.BASE_URL}/income/addIncome`, {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: data,
						month: date,
            income:"Income",
            text:categorie,
						amount:outgoin,

					})
				})
					.then((response) => response.json())
					.then((response) => {
						console.log(response);
						alert('Your Income Added');



					})
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
			});
	};
const setTotalOncome = async () => {


}
	useEffect(() =>{
		setTotal(gigs.reduce((total,gig) => total + Number(gig.outgoin),0));
    setFullIncome(gigs.reduce((fullIncome,gig) => fullIncome - Number(gig.outgoin),0))
	},[gigs])

const onPressC = (()=>{
  const newState = !items;
  setItems(newState)
})

const buttonBg = items ? "#2980b9" : "#e67e22"
    return (
        <View style={styles.container}>
            <Animatable.View animation='flipOutY'>

            </Animatable.View>

            <Animatable.View style={styles.HeaderMainContain} animation='zoomIn'>
            <Text style={styles.logo}>Add Income</Text>
            {/* <Text>Income : $ {total}</Text>
            <Text>Expense : $ {fullIncome}</Text> */}

            {/* <DropDownPicker
					style={styles.monthPicker}
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					onChangeValue={(value) => {
						setValue(value);
						console.log('selected', value);
					}}
				/> */}
            <TouchableOpacity rounded style={styles.loginBtn1} onPress={showDatepicker} >
            <Text style={styles.loginText1} >date</Text>

 

              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  
                />
              )}
    
            {/* <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Income" 
                placeholderTextColor="#353b48"
                label="Income"
                value={income}
                onChangeText={(text) => setIncome(text)}

                />

            </View> */}

           
            <Neomorph inner style={styles.neomorph4} >
            <TextInput  
               
               style={styles.inputText}
               placeholder="Amount" 
               label="Outgoing"
               value={outgoin}
               placeholderTextColor="#ffffff"
               onChangeText={(text) => setOutGoin(text)}
    
               />
            </Neomorph>


            {/* <TouchableOpacity>
                                <View
                                    style={[styles.interestContainer, {backgroundColor: '#D4B630'}]}>
                                    <MaterialCommunityIcons name='bank-outline' size={35}
                                                            color='#27231F'/>
                                    <Text
                                        style={[styles.interestTitle, {color: '#27231F'}]}>Interest</Text>
                                </View>
                            </TouchableOpacity> */}
                
            <Neomorph inner style={styles.neomorph4} >
              <TextInput  
                style={styles.inputText}
                placeholder="Category" 
                placeholderTextColor="#ffffff"
                value ={categorie}
                onChangeText={(text) => setcategorie(text)}
               
                />

      </Neomorph>

      <Neomorph inner style={{  marginLeft:110,
      marginTop:60,
      // marginBottom:10,
    
      borderRadius: 20,
      shadowRadius:7,
      // swapShadows:10,
      backgroundColor: buttonBg,
      width: 200,
      height: 60,
    
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: { width: 8, height: 8 },
    }}>
             <TouchableOpacity rounded style={{width:"100%",height:"100%",flex: 1,alignItems: 'center',justifyContent: 'center'}} onPress={() =>{
                getUserData()
                onPressC()

              }} >


            <Text style={styles.loginText1} >Add Income</Text>

              </TouchableOpacity>
			  </Neomorph>

              {/* <TouchableOpacity rounded style={styles.loginBtn} onPress={() => {getUserData();}} >

            <Text style={styles.loginText1} >Add Income</Text>

              </TouchableOpacity> */}
              {/* {gigs &&
		gigs.map((gig,i) => (
			<View key={i}>
				<Text key={i}>{gig.categorie} {gig.outgoin}</Text>
			</View>
		))
		} */}
    
            </Animatable.View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23252A',
        alignItems: 'center',
        justifyContent: 'center',
  
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
    neomorph41: {
      marginLeft:110,
      marginTop:60,
      // marginBottom:10,
    
      borderRadius: 20,
      shadowRadius:7,
      // swapShadows:10,
      backgroundColor: "#2980b9",
      width: 200,
      height: 60,
    
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: { width: 8, height: 8 },
    
    
      },
      HeaderMainContain: {
        backgroundColor: '#23252A',
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
        color:"#ffffff",
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
        color:"white",
        flex: 1,alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10
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
      loginBtn1:{
        backgroundColor:'#d1d8e0',
        width:"80%",
        borderRadius:15,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft:40,
        marginBottom:10
      },
      monthPicker: {
        marginLeft:40,
        margin: 20,
        width: 320
      },
      interestContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        /*elevation: 10,*/
    },
    interestTitle: {
      fontSize: 12,
  },
})
