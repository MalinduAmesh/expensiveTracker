import React,{Component} from 'react';
import { View, Text,FlatList,ActivityIndicator,StyleSheet,ScrollView,Button,TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UrlConfig from '../config/UrlConfig';
import DropDownPicker from 'react-native-dropdown-picker';


export default class CustomerData extends Component {

  // Set Customer Data to the table
  constructor(props) {
      super(props);
      this.state = {
        tableHead: ['Month', 'Category', 'Price'],
        widthArr: [100, 100, 100, 100, 120],
        data:[],
        isLoding:true,
        month:''
      };
    }
    
    loadAllData = async()=>{
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
                        // month:month
                        
                    })
                    
        })
        

        
        .then((response) => response.json())
        .then((json) => {
console.log("b",json)
              this.setState({data:json})
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoding:false})
        })
            });

           

  }

    componentDidMount(){


            
    }

    

    render() {

      const data1 = [
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
      
      
      const {data,isLoding} = this.state
      const state = this.state;
  
      const tableData = this.state.data.map(record => [
      //   record.email,
        record.month,
      //   record.expense,
        record.text,
        record.amount,
      ]);
  
      return (
        <View style={styles.container}>
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
      <TextInput
						style={styles.inputText}
						placeholder="Month"
						placeholderTextColor="#f5f6fa"
						onChangeText={(month) => this.setState({ month })}
					/>
        <Button title="Reports" onPress={()=>{this.loadAllData()}}></Button>
        
            <ScrollView horizontal={true}>
            <View>
        <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            </Table>
         
  
            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                 
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={this.state.widthArr}
                      style={[
                        styles.row,
                        index % 2 && {backgroundColor: '#F7F6E7'},
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
              </View>
          </ScrollView>
         {/* {isLoding ? <ActivityIndicator/> : (
           <FlatList
           data = {data}
           keyExtractor ={({id},index) =>id}
           renderItem = {({item}) => (
             <View style = {styles.listWrapper}>
             <Text style={styles.row}>{item.name}</Text>
             <Text style={styles.row}>{item.username}</Text>
             <Text style={styles.row}>{item.email}</Text>
             </View>
           )}
           
           />
         )}  */}
   
        </View>
      );
    }
}
// export default function CustomerData(props) {

//   // constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       tableHead: ['Month', 'Category', 'Price'],
//   //       widthArr: [100, 100, 100, 100, 120],
//   //       data:[],
//   //       isLoding:true
//   //     };
//   //   }
//   const [tableHead,setTableHead]= useState(['Month', 'Category', 'Price']);
//   const [widthArr,setWidthArr]= useState([100, 100, 100]);
//   const [data,setData] = useState([]);
//   const [isLoading,setLoading] = useState(true);

//   const data1 = [
//     { label: 'January', value: 'January' },
//     { label: 'February', value: 'February' },
//     { label: 'March', value: 'March' },
//     { label: 'April', value: 'April' },
//     { label: 'May', value: 'May' },
//     { label: 'June', value: 'June' },
//     { label: 'July', value: 'July' },
//     { label: 'August', value: 'August' },
//     { label: 'September', value: 'September' },
//     { label: 'October', value: 'October' },
//     { label: 'November', value: 'November' },
//     { label: 'December', value: 'December' }
//   ];


//    const loadAllData = async()=>{
//       const token1 = await AsyncStorage.getItem('token');
//       fetch(`${UrlConfig.BASE_URL}`, {
//         headers: new Headers({
//           Authorization: 'Test ' + token1
//         })
//       })

//       .then((res) => res.text())
//             .then((data) => {
//                 fetch(`${UrlConfig.BASE_URL}/expense/getExpenseD`, {
//                     method: 'post',
//           headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         email: data,
//                     })
//         })

        
//         .then((response) => response.json())
//         .then( (json) => {

//         console.log("bduuuuuuuuuuuuuuu awoo",json)
//               setData({json})
//         })
//         .catch((error) => console.error(error))
//         .finally(() => {
//           // this.setState({ isLoding:false})
//           setLoading(false)
//         })
//             });

            

//   }

// // useEffect (()=>{

//   var tableData =data.map(record => [

//     //   record.email,
//       record.month,
//     //   record.expense,
//       record.text,
//       record.amount,

//     ]);

// // },[])
    
    
 
    

//       return (
//         <View style={styles.container}>
//           {/* <DropDownPicker
//         style={styles.monthPicker}
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//         onChangeValue={(value) => {
//           setValue(value);
//           console.log('selected', value);
//         }}
//       /> */}
//         <Button title="addd" onPress={()=>{loadAllData()}}></Button>
//             <ScrollView horizontal={true}>
//             <View>
//         <Table borderStyle={{borderColor: 'transparent'}}>
//             <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
//             </Table>
         
  
//             <ScrollView style={styles.dataWrapper}>
//                 <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                 
//                   {tableData.map((rowData, index) => (
//                     <Row
//                       key={index}
//                       data={rowData}
//                       widthArr={widthArr}
//                       style={[
//                         styles.row,
//                         index % 2 && {backgroundColor: '#F7F6E7'},
//                       ]}
//                       textStyle={styles.text}
//                     />
//                   ))}
//                 </Table>
//               </ScrollView>
//               </View>
//           </ScrollView>
//          {/* {isLoding ? <ActivityIndicator/> : (
//            <FlatList
//            data = {data}
//            keyExtractor ={({id},index) =>id}
//            renderItem = {({item}) => (
//              <View style = {styles.listWrapper}>
//              <Text style={styles.row}>{item.name}</Text>
//              <Text style={styles.row}>{item.username}</Text>
//              <Text style={styles.row}>{item.email}</Text>
//              </View>
//            )}
           
//            />
//          )}  */}
   
//         </View>
//       );
//     }


    const styles = StyleSheet.create({
      container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
      header: {height: 50, backgroundColor: '#537791'},
      text: {textAlign: 'center', fontWeight: '100'},
      dataWrapper: {marginTop: -1},
      row: {height: 40, backgroundColor: '#E7E6E1'},

      inputText:{
        color:"#ECF0F3",
        backgroundColor:'black',
        },
    },

    );
    
