import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, ImageBackground, Modal, Keyboard, } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Rating from '../components/Rating';
import { globlestyles } from '../mystyles/globleStyle';
import {MaterialIcons} from '@expo/vector-icons'
import ModalForm from '../components/ModelForm';
import { Example } from '../components/Example';


export default function Home({navigation}) {
  const handleNavigation = () =>{
    navigation.navigate('Review')
  }

  const [model,setModal] = useState(false)

  const [mylist,setMylist] = useState([
    {
      title:'harriet',
      age:'58',
      body:'i am a mother',
      rating:5,
      key:'1'
    },
    {
      title:'Gloria',
      age:'34',
      body:'i am a sister',
      rating:3,
      key:'2'
    },
    {
      title:'Kenet',
      age:'38',
      body:'i am a brother',
      rating:1,
      key:'4'
    },
    {
      title:'Geserwa',
      age:'31',
      body:'i am a brother 2',
      rating:1,
      key:'3'
    },
  ])
const addReview = (review) =>{
  review.key=Math.random().toString()
  setMylist((currentList) =>{
    return[review,...currentList]
    
  });
  setModal(false)

}

  return (

    <View style={globlestyles.container}>
      <MaterialIcons
      name='add'
      style={styles.icon}
      onPress={() => setModal(true)}
    size={28}
      />
      
      <Modal visible={model}  animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
          <MaterialIcons
           name='close'
          style={{...styles.icon,...styles.hideIcon}}
          onPress={() => setModal(false)}
          size={28}
         />
            <Example addReview={addReview}/>
        
        </TouchableWithoutFeedback>

      </Modal>
    <FlatList

    data={mylist}
    renderItem = {({item}) => <TouchableOpacity onPress={ () => navigation.navigate('Review',item)}>
    <Card> 
       <Text>{item.title}</Text> 
    </Card>
    </TouchableOpacity>}
    />
    {/* <ImageBackground source={require('./')} /> */}
   


       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
   fontFamily:'krona'
  
  },

  homeText:{
      color:'black',
    fontFamily:'krona'
  },
  hideIcon:{
    marginTop:20

  },
  icon:{
    borderWidth:2,
    padding:7,
    borderRadius:10,
    borderColor:'#fff',
    alignSelf:'center'
  
  }
});
