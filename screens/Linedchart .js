import React, { Component } from "react";
import {
  Alert,StyleSheet,Text,View,ActivityIndicator,Dimensions,
  
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UrlConfig from '../config/UrlConfig';

import {
 LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart
} from "react-native-chart-kit";

class Linedchart extends Component {
  state = {
datasource:[]
  };

LineChart_Dynamic=()=>{

if (this.state.datasource){
if(this.state.datasource.length){

return(
<View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data:  this.state.datasource.map(item=>{
            return(
              item.students 
            )
          })
          
        }
      ]
    }}
    width={Dimensions.get("window").width} 
    height={220}
    yAxisLabel="students"
    yAxisSuffix="k"
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
)
} else {
return(

<View style={{justifyContent:"center",alignItems:'center',flex:1}}>

<ActivityIndicator size="large"/>

</View>

)
  }

}else {

  return(
  
  <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
  
 <Text>no data found</Text>
  
  </View>
  )}

  }


 get_chart= async()=>{
 
        const token1 = await AsyncStorage.getItem('token');
        fetch(`${UrlConfig.BASE_URL}`, {
          headers: new Headers({
            Authorization: 'Test ' + token1
          })
        })
  
        .then((res) => res.text())
              .then((data) => {
                  fetch(`${UrlConfig.BASE_URL}/expense/getExpenseD`, {
                      method: 'post',
            headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                          email: data,
                         
                          
                      })
                      
          })
          
  
          
          .then((response) => response.json())
          .then((json) => {
            console.log("bduuuuuuuuuuuuuuu awoo",json)
                this.setState({datasource:json})
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoding:false})
          })
              });
}


  componentDidMount=()=>{
    this.get_chart()
  }

  render() {

return(
<View>

{this.LineChart_Dynamic()}

</View>

)}}

export default Linedchart;