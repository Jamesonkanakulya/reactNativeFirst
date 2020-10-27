import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.container}>
        <View style={styles.content} >
            {props.children}
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
    marginHorizontal:18,
    marginVertical:10,
  }
});