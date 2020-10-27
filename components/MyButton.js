import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function MyButton({onPress,text}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:6,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
    justifyContent:'center'
 
  
  },
  text:{
  color:'white',fontWeight:'bold',
  textTransform:'uppercase',
  fontSize:16,
  textAlign:"center"
  },
  
});