import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Rating from '../components/Rating';

export default function Review({navigation}) {
  console.log(navigation.getParam('rating'));
  
  return (
    <View style={styles.container}>
      <Card>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('age')}</Text>
      <Text>{navigation.getParam('body')}</Text>
   
      
     

      </Card>
      <Rating style={styles.rating} rating={navigation.getParam('rating')}/> 
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
  
  },
  rating:{
    padding:30
  }
});
