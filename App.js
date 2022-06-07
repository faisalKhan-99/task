/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {Node} from 'react';
import 'react-native-gesture-handler';
import LoginStack from './Auth/LoginStack';

import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App= () => {

  // useEffect(() => {
  //   Orientation.lockToPortrait();
  // }, []);

  

  return (
    <SafeAreaView style = {{flex: 1}}>
      <NavigationContainer>
        <LoginStack/>
  </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
