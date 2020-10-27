import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function Stars(props) {
  return (
    <View style={styles.container}>
        <View style={styles.content} >
          <FontAwesome name={props.filled ===true?"star":"star-o"} color='#E3CD05' style={styles.icon} />
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowColor:"#333",
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.3,
    marginHorizontal:4,
    marginVertical:6,
    shadowRadius:2  
  
  },
  content:{
      justifyContent:'center',
      alignItems:'center',
    marginHorizontal:-5,
    marginVertical:10,
  },
  icon:{
    fontSize:30
  }
});