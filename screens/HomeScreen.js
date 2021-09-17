import React,{useEffect,useState} from 'react';
import {StatusBar, Text, View, StyleSheet, Dimensions, Image,FlatList,SafeAreaView,ScrollView,RefreshControl} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {PieChart} from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UrlConfig from '../config/UrlConfig';
import Income from './Income';
import {Card} from 'react-native-shadow-cards';
import DateTimePicker from '@react-native-community/datetimepicker';
import Hr from 'react-native-hr-component'
import styles from 'react-native-hr-component/styles';
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import { Card, ListItem, Button } from 'react-native-elements'
// const width = Dimensions.get('window').width / 2 - 30;


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const HomeScreen = () => {
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    // const [catergoryIndex, setCategoryIndex] = React.useState(0);
    // const categories = [];

    const [email,setEmail] = React.useState('')
    const [description,setDescription] = React.useState('')
    const [amount,setAmount] = React.useState('')
    const [test,setTest] =React.useState('');
    const [fullTest ,setfullTest] = React.useState('')
    const [refreshing, setRefreshing] = React.useState(false);

    var fullIncomeAmount;
    useEffect(

      // Get loged customer email
      async() =>{
      
      const token = await AsyncStorage.getItem('token');
      fetch(`${UrlConfig.BASE_URL}`, {
        headers: new Headers({
          Authorization: 'Test ' + token
        })
      })

      .then((res) => res.text())
			.then((data) => {
      
				fetch(`${UrlConfig.BASE_URL}/income/getIncomeD`, {
					method: 'post',
          headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: data,
					})
        })

        // Get amount and set to the State
        .then((response) => response.json())
        .then((response) => {

         var FullIncomeTot = 0;
         
          for(var i = 0; i < response.length; i++){

             FullIncomeTot +=parseInt(response[i].amount);
          }
          setTest(FullIncomeTot)
        



          // console.log( "Get All Data",response);
          // var fullIncomeTest = setTest(response[0].amount);
          // console.log("Print Amount ",response[0].amount)
        })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
			});


      const token1 = await AsyncStorage.getItem('token');
      fetch(`${UrlConfig.BASE_URL}`, {
        headers: new Headers({
          Authorization: 'Test ' + token1
        })
      })

      .then((res) => res.text())
			.then((data) => {
          console.log("+",data)
				fetch(`${UrlConfig.BASE_URL}/expense/getExpenseD`, {
					method: 'post',
          headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: data,
					})
        })


        // Get Expense Details and set to the state
        .then((response) => response.json())
        .then((response) => {

         var FullExpenseTot = 0;
         
          for(var i = 0; i < response.length; i++){

            FullExpenseTot +=parseInt(response[i].amount);
          }
          setfullTest(FullExpenseTot)
        



          // console.log( "Get All Data",response);
          // var fullIncomeTest = setTest(response[0].amount);
          // console.log("Print Amount ",response[0].amount)
        })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
			});

      // Calculate the Balance
        const FullIncome = parseInt(test)
        const fullExpense = parseInt(fullTest)
    
        const fullBalance = (FullIncome - fullExpense)
    
        setBalance(fullBalance)


    },[refreshing])

    // setBalance(() =>{
      
    // })

    const [categorie, setcategorie] = useState('');
    const [outgoin, setOutGoin] = useState('');
    const [gigs, setGigs] = useState([{categorie, outgoin}]);
    const [total, setTotal] = useState(0);
    const [balance,setBalance] = useState(0);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
  
    const [_id, set_id] = useState('');
    const [income, setIncome] = useState('');
    const [model, setModel] = useState(false);
    const [open, setOpen] = useState(false);
  
    
  
  
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
   
      setGigs([
        ...gigs,
        {
          outgoin:outgoin,
          categorie:categorie,
        },
      ]);
    
      setcategorie('');
      setOutGoin('');
    

    };

    //pie chart data
const data = [
  {
      name: "Income",
      value:parseInt(test) ? parseInt(test) : 0 ,
      color: "#0370B8",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "Expense",
      value:parseInt(fullTest) ? parseInt(fullTest) : 0 ,
      color: "#f39c12",
      legendFontColor: "#f39c12",
      legendFontSize: 15
  },
  {
      name: "Balance",
      value:parseInt(balance) ? parseInt(balance) : 0 ,
      color: "#218c74",
      legendFontColor: "#218c74",
      legendFontSize: 15
  }
];


const screenWidth = Dimensions.get("window").width;

// Pie Chart config Data
const chartConfig = {
  backgroundGradientFrom: "#e55039",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


  
    // useEffect(async() =>{
    //   setTotal(gigs.reduce((total,gig) => total + Number(gig.outgoin),0));
    //   setBalance(() =>{
    //     const FullIncome = parseInt(test)
    //     const fullExpense = parseInt(total)
    
    //     const fullBalance = (FullIncome - fullExpense)
    
    //     setBalance(fullBalance)
    //   })
    // },[gigs])
  


    return (

      <ScrollView style={style.container2} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

      <Animatable.View animation='fadeInDownBig' style={style.container}>
            <StatusBar backgroundColor='#0370B8' barStyle="dark-content"/>

            <Animatable.View style={style.HeaderMainContain} animation='fadeInUpBig'>
           
            <View style={style.monthlyOverviewContainer}>
            <View style={style.detailsContainer}>

                        <View style={style.monthlyExpenseContainer}>
                        <Text style={style.expenseTitle5}>Welcome ,</Text>
                        <Text style={style.expenseTitle4}>Here's your finacial report this month</Text>
                        <Image style={style.tinyLogo}
                              source={require('../assets/logo2.png')}></Image>
                        </View>

                    </View>
                </View>
              
            </Animatable.View>
            
            <Animatable.View style={style.HeaderMainContain} animation='fadeInUpBig'>
             <View style={style.neomorph41} >
            <View style={style.detailsContainer45}>

                        <View style={style.monthlyExpenseContainer3}>
                        <Text style={style.expenseTitle}>TOTAL BALANCE</Text>
                        <Text style={style.expenseValue}>${balance}.00</Text>
                        {/* <Text style={{color:"#0370B8"}}>---------------------------------------------------------------------------------------</Text> */}
                        {/* <Hr text={""} lineColor="#0370B8" /> */}
                        </View>                 
                    </View>
                </View>
            </Animatable.View>

            <Animatable.View animation='bounceIn' duration={1500}>
            <Neomorph inner style={style.neomorph4} >
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#f1f2f6', left: 20,top:5}}>Reports</Text>
            <Text></Text>

                <PieChart style={style.pieChart}
                    data={data}
                    width={370}
                    height={200}
                    doughnut={true}
                    chartConfig={chartConfig}
                    accessor={"value"}
                    backgroundColor={"transparent"}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                    absolute
                />
                </Neomorph>
            </Animatable.View>
            <Animatable.View style={style.HeaderMainContain} animation='fadeInUpBig'>
             <Neomorph inner style={style.neomorph43} >
            <View style={style.detailsContainer4}>
                        
                         <View style={style.detailsContainer1}>
                        <View style={style.monthlyExpenseContainer1}>
                        <SimpleLineIcons name="arrow-up" size={20} color="#10ac84" style={style.searchIcon} />
                        <Text style={style.expenseTitle1}>Income</Text>
                        <Text style={style.expenseValue1}>${test}</Text>
                        </View>
                    </View>
                   
                    <View style={style.detailsContainer2}>
                        <View style={style.monthlyExpenseContainer2}>
                        <SimpleLineIcons name="arrow-down" size={20} color="#c23616" style={style.searchIcon} />
                        <Text style={style.expenseTitle2}>Expense</Text>
                        <Text style={style.expenseValue2}>${fullTest}</Text>
                        </View>
                    </View> 

                    <View style={style.detailsContainer5}>
                    <FontAwesome5 name="file-invoice-dollar" size={20} color="#f1c40f" style={style.searchIcon1} />
                      <Text style={style.tips}>Your budget seem's not stable. here's tips for u</Text>
                      <Neomorph inner style={style.neomorph42} >
                      <MaterialIcons name="navigate-next" size={40} color="#23252A" style={style.searchIcon2} />
                      </Neomorph>

                    </View>
                    
                    </View>
                </Neomorph>
            </Animatable.View>
            {/* <Animatable.View style={style.HeaderMainContain2} animation='fadeInUpBig'>
                <View style={style.monthlyOverviewContainer2}>
                <View style={style.detailsContainer}>
                        <View style={style.monthlyExpenseContainer1}>
                        <Text style={style.expenseTitle1}>Income</Text>
                        <Text style={style.expenseValue1}>${test}</Text>
                        </View>
                    </View>
                   
                    <View style={style.detailsContainer}>
                        <View style={style.monthlyExpenseContainer2}>
                        <Text style={style.expenseTitle2}>Expense</Text>
                        <Text style={style.expenseValue2}>${total}</Text>
                        </View>
                    </View>
                </View>
            </Animatable.View> */}

        </Animatable.View>
        </ScrollView>
           );
          };
          
           
           
            {/* {gigs &&
		gigs.map((gig,i,t) => (
      <Card style={{padding: 7,marginBottom:10,marginLeft:20,marginTop:5}}>
      <Text style ={{marginLeft:140}} key={i}>{gig.categorie} {gig.outgoin} </Text>
      </Card>
			
      
		))
		} */}
{/* 
            <Animatable.View style={styles.HeaderMainContain} animation='zoomInUp'>

            <Text style={styles.logo}>Add Income</Text>
            
            <TouchableOpacity rounded style={styles.loginBtn1} onPress={showDatepicker} >
            <Text style={styles.loginText1} >Add Date</Text>

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
    
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Income" 
                placeholderTextColor="#353b48"
                label="Income"
                value={income}
                onChangeText={(text) => setIncome(text)}

                />

            </View>

            <View style={styles.inputView} >
              <TextInput  
               
                style={styles.inputText}
                placeholder="Amount" 
                label="Outgoing"
                value={outgoin}
                placeholderTextColor="#353b48"
                onChangeText={(text) => setOutGoin(text)}
     
                />

            </View>

            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Category" 
                placeholderTextColor="#353b48"
                value ={categorie}
                onChangeText={(text) => setcategorie(text)}
               
                />

            </View>


            <TouchableOpacity rounded style={styles.loginBtn}onPress={() => {
						getUserData();
					}} >

            <Text style={styles.loginText1} >Add Expense</Text>

              </TouchableOpacity>
              <TouchableOpacity rounded style={styles.loginBtn}onPress={() => {
               setTimeout(() => {
                alert('Added Your Income')
                  }, 1500); 
					}} >


            <Text style={styles.loginText1} >Add Income</Text>

              </TouchableOpacity>
    
            </Animatable.View> */}

       

            {/* <Animatable.View style={style.cardAppMain}> */}
                {/* <CategoryList /> */}
      {/* <FlatList style={style.cardRender}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      /> */}

      {/* </Animatable.View> */}
        {/* </View> */}


const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
    container: {
      top:65,
      height:757,
      backgroundColor: '#23252A',

      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    container2: {
      // top:50,

      flex: 1,
    },
    tinyLogo: {
      position:'relative',
      bottom:50,
      left:160,
      width: 40,
      height:40,
      borderRadius:40
    },
    neomorph41: {
      marginLeft:35,
      // borderRadius: 20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      // shadowRadius: 1000,
      backgroundColor: '#0370B8',
      width: 350,
      height: 105,
      bottom:95,
      flex: 1,

      justifyContent: 'center',
      alignItems: 'center',
      // shadowOffset: { width: -8, height: -8 },
    
    
      },
      neomorph43: {
        marginLeft:30,
        borderRadius: 20,
        // borderTopLeftRadius:100,
        shadowRadius: 8,
        backgroundColor: '#23252A',
        width: 350,
        height: 220,
        bottom:50,
        flex: 1,
  
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: -8, height: -8 },
      
      
        },
      neomorph42: {
        // marginLeft:5,
        borderRadius: 10,
        // borderTopLeftRadius:100,
        shadowRadius: 5,
        backgroundColor: '#0370B8',
        width: 30,
        height: 30,
        bottom:0,
        flex: 1,
        right:70,
        // marginRight:90,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: -8, height: -8 },
      
      
        },
      //   headerContainer: {
      //     backgroundColor: '#ffffff',
      //     width: 380,
      //     height: 300,
      //     top:85,
      //     borderRadius: 30,
      //     elevation: 5,
      //     // marginLeft:,
      //     shadowColor: '#4949a3',
      //     shadowOffset: {
      //         width: 0,
      //         height: 10
      //     },
      //     shadowOpacity: 0.25,
      //     shadowRadius: 3.5,
      // },
        neomorph4: {
          marginLeft:21,
          // marginTop:20,
          // marginBottom:10,
          borderRadius: 20,
          shadowRadius: 1,
          // swapShadows:10,
          elevation: 5,
          backgroundColor: '#23252A',
          width: 370,
          height: 270,
          top:-70,
          bottom:0,
          shadowOffset: { width: 3, height: 4 },

          },
    searchIcon:{
    padding:6
    },
    searchIcon1:{
      left:0
      },
      searchIcon2:{
        right:4,
        bottom:5
        },
    cardAppMain:{
        backgroundColor: '#ffffff',
        width: 380,
        height: 400,
        marginTop: 350,
        bottom:330,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#4949a3',

        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        // marginBottom:10
    },

    userImage: {
        alignSelf: 'center',
        top: 20
    },
    fullName: {
        alignSelf: 'center',
        top: 20,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical:10
    },
    userName: {
        alignSelf: 'center',
        top: 20,
        color: 'grey',
        marginBottom:30
    },
    monthlyOverviewContainer: {
      width: '100%',
      height: 220,
      marginTop:-70,
      backgroundColor: '#0370B8',
      alignItems: 'center',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50
  },
    monthlyOverviewContainer2: {
        marginTop:0,
        bottom:42,
        // marginBottom:350,
        width: '90%',
        height: 200,
        backgroundColor: '#e1b12c',
        alignItems: 'center',
        borderRadius:30,
        marginLeft:20
    },

    monthContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    monthName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    detailsContainer: {
        position: 'absolute',
        width: '100%',
        height: 100,
        // bottom: ,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    detailsContainer4: {
      position: 'absolute',
      width: '100%',
      height: 100,
      top:-75 ,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  detailsContainer45: {
    position: 'absolute',
    width: '100%',
    height: 100,
    top:25.9 ,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
    detailsContainer1: {
      position: 'absolute',
      width: '100%',
      height: 100,
      // bottom: ,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      top:95,
      left:50
  },
  detailsContainer2: {
    position: 'absolute',
    width: '100%',
    height: 100,
    // bottom: ,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top:95,
    right:50
},
detailsContainer5: {
  position: 'absolute',
  width: '100%',
  height: 100,
  // bottom: ,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  top:175,
  right:0,
  left:47
},
tips:{
  width:"50%",
  right:30,
fontSize:11,
color:'#f1f2f6'
},    monthlyIncomeContainer: {
        width: 100,
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    incomeValue: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#f1c40f'
    },
    incomeTitle: {
        color: 'white',
        fontSize: 13,
        fontWeight: '100'
    },
    monthlyRevenueContainer: {
        width: 120,
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    revenueValue: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#323432'
    },
    revenueTitle: {
        color: 'white',
        fontSize: 15,
    },
    monthlyExpenseContainer: {
        width: "100%",
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:50
    },
    monthlyExpenseContainer3: {
      width: "100%",
      height: '60%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
    monthlyExpenseContainer1: {
      width: 100,
      height: '60%',
     marginRight:250,
     flex: 1,
    //  flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
  },
  monthlyExpenseContainer2: {
    width: 100,
    height: '60%',
    marginLeft:250,
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

},
    expenseValue: {
       
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ffffff',
        marginBottom:12
    },
    expenseValue1: {
       
      fontWeight: 'bold',
      fontSize: 20,
      color: '#10ac84'
  },
  expenseValue2: {
       
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c23616'
},
    expenseTitle: {
        color: 'white',
        fontSize: 12,
        fontWeight: '100',
        bottom:8
    },
    expenseTitle4: {
      top:12,
      right:63,
        color: '#f1f2f6',
        fontSize: 12,
        fontWeight: '100'
    },
    expenseTitle5: {
      top:0,
      right:113,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    expenseTitle1: {
      color: 'white',
      fontSize: 11,
      fontWeight: '100'
  },
  expenseTitle2: {
    color: 'white',
    fontSize: 11,
    fontWeight: '100'
},
    HeaderMainContain: {
        width: width,
        height: 120,
    },
    HeaderMainContain2: {
      width: width,
      height: 120,
  },

      categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
      },
      card: {
        height: 180,
        backgroundColor: COLORS.light,
        width:180,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
      },
      header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      searchContainer: {
        height: 20,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.dark,
      },
      // scrollView: {
      //   backgroundColor: '#f5f6fa',
      //   // marginHorizontal: 20,
      //   width:"100%"
      // },
 
});


const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name='Home' component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;