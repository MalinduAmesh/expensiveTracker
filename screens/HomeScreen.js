import React from 'react';
import {StatusBar, Text, View, StyleSheet, Dimensions, Image,FlatList,SafeAreaView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PieChart} from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import plants from '../consts/plants';
// const width = Dimensions.get('window').width / 2 - 30;

//pie chart data
const data = [
    {
        name: "Income",
        value: 50000,
        color: "#227093",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Expense",
        value: 30000,
        color: "#ffb142",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Balance",
        value: 20000,
        color: "#218c74",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const screenWidth = Dimensions.get("window").width;

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

const HomeScreen = () => {
    
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = [];

    const CategoryList = () => {
        return (
          <View style={style.categoryContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setCategoryIndex(index)}>
                <Text
                  style={[
                    style.categoryText,
                    catergoryIndex === index && style.categoryTextSelected,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      };


      const Card = ({plant}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', plant)}>
            <View style={style.card}>
              <View style={{alignItems: 'flex-end'}}>

              </View>
    
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={plant.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View>
    
              <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                {plant.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
              </View>
            </View>
          </TouchableOpacity>
        );
      };


    return (
        <View style={style.container}>
            <StatusBar backgroundColor='#E3E7F1' barStyle="dark-content"/>
            <Animatable.View style={style.HeaderMainContain} animation='fadeInUpBig'>
                <View style={style.monthlyOverviewContainer}>
                
                    <View style={style.detailsContainer}>
                        <View style={style.monthlyExpenseContainer}>
                        <Text style={style.expenseTitle}>Balance</Text>
                        <Text style={style.expenseValue}>$10000</Text>
                        </View>
                    </View>
                </View>
            </Animatable.View>
            <Animatable.View style={style.headerContainer} animation='bounceIn' duration={1500}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#414754', left: 20,top:5}}>Overview</Text>
            <Text style={style.fullName}>User Name</Text>

                <PieChart style={style.pieChart}
                    data={data}
                    width={screenWidth}
                    height={200}
                    doughnut={true}
                    chartConfig={chartConfig}
                    accessor={"value"}
                    backgroundColor={"transparent"}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                    absolute
                />
            </Animatable.View>

            <Animatable.View style={style.cardAppMain}>
                <CategoryList />
      <FlatList style={style.cardRender}
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
      />
      </Animatable.View>
        </View>
    );
};

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
    headerContainer: {
        backgroundColor: '#ffffff',
        width: 380,
        height: 300,
        marginTop: 645,
        bottom:320,
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#4949a3',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
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
        height: 150,
        backgroundColor: '#10ac84',
        alignItems: 'center',
        top: 293,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
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
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    monthlyIncomeContainer: {
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
        width: 100,
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    expenseValue: {
       
        fontWeight: 'bold',
        fontSize: 25,
        color: '#323432'
    },
    expenseTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '100'
    },
    HeaderMainContain: {
        width: width,
        height: 400,
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
 
});

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name='Home' component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;