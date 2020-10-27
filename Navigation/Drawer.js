import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AbouStack from './AboutStack';
import HomeStack from './HomeStack';


const screens={
    Home:{
        screen:HomeStack,
        // navigationOptions:{
        //     headerStyle:{
        //         backgroundColor:"#eee"
        //     }
        // }

    },
    About:{
        screen:AbouStack
    }
}
// const config = {
 
//     initialRouteName:'Home'
// }
const drawStack = createDrawerNavigator(screens)

export default createAppContainer(drawStack)