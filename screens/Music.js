import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import { NeomorphBlur } from 'react-native-neomorph-shadows';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';


const gray = "#91A1BD"

function Music() {

    return(
    <View style={styles.main}>
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.section}>
        <Text style={styles.title}>Shadows</Text>
        <Shadow style={styles.shadow1} />

        <View style={styles.divider} />
        <Shadow inner style={styles.shadow3} />

      </View>
      <View style={styles.section}>
      <Text style={styles.title}>Neomorph</Text>

      <Neomorph inner style={styles.neomorph4} />
        <View style={styles.divider} />

        <Neomorph style={styles.neomorph1} />
        <View style={styles.divider} />
        
        <View style={styles.divider} />


        <Neomorph inner style={styles.neomorph5} />
        <View style={styles.divider} />
        <Neomorph
          inner
          style={styles.neomorph6}
          darkShadowColor="indigo"
          lightShadowColor="darkcyan"
        />
        <View style={styles.divider} />
        <Neomorph style={styles.neomorph7}>
          <Neomorph inner style={styles.neomorph8} />
        </Neomorph>
        <View style={styles.divider} />
        <Neomorph inner style={styles.neomorph9}>
          <Neomorph style={styles.neomorph10} />
        </Neomorph>
      </View>
      
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
main: {
  flex: 1,
  backgroundColor: '#23252A',
},
contentContainerStyle: {
  paddingTop: 60,
  paddingBottom: 100,
},
section: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  marginVertical: 32,
},
divider: {
  height: 70,
},
shadow1: {
  borderRadius: 20,
  shadowOpacity: 0.25,
  shadowColor: 'black',
  shadowRadius: 20,
  backgroundColor: '#0370B8',
  width: 300,
  height: 120,
},
shadow2: {
  borderRadius: 100,
  shadowOpacity: 0.25,
  shadowColor: 'purple',
  shadowRadius: 20,
  shadowOffset: { width: 20, height: 20 },
  backgroundColor: '#ECF0F3',
  width: 200,
  height: 200,
},
shadow3: {
  borderRadius: 20,
  shadowOpacity: 0.25,
  shadowColor: 'black',
  shadowRadius: 20,
  backgroundColor: '#ECF0F3',
  width: 300,
  height: 120,
},
shadow4: {
  borderRadius: 100,
  shadowOpacity: 0.25,
  shadowColor: 'purple',
  shadowRadius: 20,
  shadowOffset: { width: 20, height: 20 },
  backgroundColor: '#ECF0F3',
  width: 200,
  height: 200,
},
neomorph1: {
  borderRadius: 20,
  shadowRadius: 8,
  backgroundColor: '#0370B8',
  width: 300,
  height: 120,
},
neomorph2: {
  borderRadius: 80,
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 160,
  height: 160,
},
neomorph3: {
  borderRadius: 80,
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 160,
  height: 160,
  shadowOpacity: 0.5,
},
neomorph4: {
  borderRadius: 20,
  shadowRadius: 4,
  backgroundColor: '#22252B',
  width: 300,
  height: 160,
},
neomorph5: {
  borderRadius: 80,
  shadowRadius: 8,
  backgroundColor: '#0370B8',
  width: 160,
  height: 160,
  shadowOffset: { width: -8, height: -8 },
},
neomorph6: {
  borderRadius: 80,
  shadowRadius: 12,
  backgroundColor: '#0370B8',
  width: 160,
  height: 160,
  shadowOpacity: 0.5,
},
neomorph7: {
  borderRadius: 100,
  shadowRadius: 12,
  backgroundColor: '#0370B8',
  width: 200,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
},
neomorph8: {
  borderRadius: 70,
  shadowRadius: 12,
  backgroundColor: '#0370B8',
  width: 140,
  height: 140,
},
neomorph9: {
  borderRadius: 100,
  shadowRadius: 12,
  backgroundColor: '#0370B8',
  width: 200,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
},
neomorph10: {
  borderRadius: 70,
  shadowRadius: 12,
  backgroundColor: '#0370B8',
  width: 140,
  height: 140,
},
neomorphblur1: {
  borderRadius: 100,
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 200,
  height: 200,
},
neomorphblur2: {
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 140,
  height: 140,
  shadowOffset: { width: -12, height: -12 },
},
neomorphblur3: {
  borderRadius: 100,
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 200,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
},
neomorphblur3_1: {
  borderRadius: 70,
  shadowRadius: 12,
  backgroundColor: '#ECF0F3',
  width: 140,
  height: 140,
  shadowOffset: { width: -12, height: -12 },
},
});

export default Music
