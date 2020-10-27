import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screens/Home';
import Review from '../Screens/Review';
import Header from './Header';
import React from 'react';
import { StyleSheet } from 'react-native';

const screens={
    Home:{
        screen:Home,
        navigationOptions: ({navigation}) =>{
          return { headerTitle:() => <Header style={styles.container} navigation={navigation}/>}

         
        }

    },
    Review:{
        screen:Review
    }
}
// const config = {
 
//     initialRouteName:'Home'
// }
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{

        headerStyle:{
                    backgroundColor:"#eee",height:80,
                }

    }
});

const styles = StyleSheet.create({
    container: {
      position:'relative',
      flex: 1,
      width:'120%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      resizeMode:'cover',
      backgroundColor:'yellow'
      // marginLeft:-17,
      // marginTop:-27
      
  
     
  
      },
  

  
  });

export default HomeStack