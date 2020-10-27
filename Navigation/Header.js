import React from 'react';
import { ImageBackground, StyleSheet, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons'


export default function Header({navigation}) {
  const handleMenue = () =>{
    navigation.openDrawer()
  }

  

  return (

    <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')} >
      <MaterialIcons name='menu' style={styles.icon} onPress={handleMenue} size={28} color="white"/>
      <Text style={styles.headerText} >Test</Text>
  
    </ImageBackground>
 
  );
}

const styles = StyleSheet.create({
  container: {

 
    width:400,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
    paddingHorizontal:-50,
    marginLeft:-17,
    // marginTop:-27
    

   

    },

  headerText:{
    color:'white',
    fontFamily:'krona'
  },
  icon:{
      position:'absolute',
      paddingVertical:30,
      left:'2%'
  },

});
