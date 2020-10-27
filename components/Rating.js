import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import Stars from './Stars'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';


// const numStars =3;
export default function Rating({rating}) {

    // const [rating,setrating] =useState(0)
    // const rate = (star) =>{
    //     setrating(star)
    // }

   const numStars = parseInt(rating)
   console.log(rating);

    let stars =[]
    for(let x=1;x <= numStars;x++){
        stars.push(
            <TouchableWithoutFeedback key={x} style={styles.star} >
                   <Animated.View>
                      <Stars filled={x <= rating? true:false}/>
                   </Animated.View> 
            </TouchableWithoutFeedback>
            // <TouchableWithoutFeedback key={x} style={styles.star} onPress= {() => rate(x)}>
            //        <Animated.View>
            //           <Stars filled={x <= rating? true:false}/>
            //        </Animated.View> 
            // </TouchableWithoutFeedback>
        )
    }
  return (
    <View style={styles.container}>
        <View style={styles.content} >
         {stars}
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  content:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',

   
  },
  star:{
      width:'100%',
      padding:20
  }

});