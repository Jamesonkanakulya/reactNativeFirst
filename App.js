import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './Navigation/Drawer'
import { globlestyles } from './mystyles/globleStyle';
import Home from './Screens/Home';


export default function App() {
  const getFont =() => Font.loadAsync({
    "roboto-bold":require('./assets/fonts/Roboto-Bold.ttf'),
    "roboto-italic":require('./assets/fonts/Roboto-Italic.ttf'),
    "roboto-regular":require('./assets/fonts/Roboto-Regular.ttf'),
    'krona':require('./assets/fonts/KronaOne-Regular.ttf')
  })



  let [fontsLoaded,setfontLoaded] = useState(false);
      if(fontsLoaded){
      return <Navigator/>
        ;
    }else{
      return<AppLoading
      startAsync ={getFont}
      onFinish={() => setfontLoaded(true)}
      />
  
    }
  
 


  // return(<Navigator/>
  //   // <View>
  //   //   <Myapps/>
      



  //   // </View>
  // )
  
}
