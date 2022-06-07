import 'react-native-gesture-handler'; // hello heyy
import React from 'react';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import Login from './Login'
import MainStack from '../MainStack';

const LoginStack = () => {
    const stack = createStackNavigator();

    return (
        <stack.Navigator screenOptions = {{headerShown: false}}>
            <stack.Screen name = 'Login' component = {Login}/> 
            <stack.Screen name = 'MainStack' component = {MainStack} options={{...TransitionPresets.ScaleFromCenterAndroid}}/>
            
        </stack.Navigator>
    )
}

export default LoginStack;