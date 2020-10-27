import {createStackNavigator} from 'react-navigation-stack';
import About from '../Screens/About';
import Header from './Header';
import React from 'react';
import { Example } from '../components/Example';

const screens={
 
    About:{
        screen:About,
        navigationOptions: ({navigation}) =>{
            return { headerTitle:() => <Header navigation={navigation}/>}
  
           
          }
    }
}

const AbouStack = createStackNavigator(screens,{
    defaultNavigationOptions:{

        headerStyle:{
                    backgroundColor:"#eee",height:80,
                }

    }
});

export default AbouStack



{
    (props) =>(<View>
        <Text>hello</Text>
   
            {/* <TextInput
            style={globlestyles.input}
            placeholder='title'
            onChange={props.handleChange('title')}
            value={props.values.title}

            />
            <TextInput
            keyboardType='numeric'
            placeholder='Age'
            style={globlestyles.input}
            onChange={props.handleChange('age')}
            value={props.values.age}

            />
            <TextInput
            multiline
            style={globlestyles.input}
            placeholder='Comment'
            onChange={props.handleChange('body')}
            value={props.values.body}

            />
            <TextInput
            keyboardType='numeric'
            placeholder='1-5'
            style={globlestyles.input}
            onChange={props.handleChange('rating')}
            value={props.values.rating}

            />
            <Button
            title='submit'
            color
            onPress={props.handleSubmit}
            /> */}
        </View>
    )
}