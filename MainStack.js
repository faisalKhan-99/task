import React, {useEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';    
import Dashboard from './screens/Dashboard'

const MainStack = ({navigation}) => {
    const stack = createStackNavigator();

    return(
        <stack.Navigator screenOptions = {{headerShown: false}}>
    <stack.Screen name = 'Dashboard' component = {Dashboard}  />
    </stack.Navigator>
    )
}
export default MainStack;