/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';

const {Screen, Navigator} = createNativeStackNavigator()


const App = () => {
 


  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{
        headerStyle:{},
        headerShown:false
      }}
      >
        <Screen name='Home' component={Home} options={{title:'Home Screen'}} />
        <Screen name='Details' component={Detail} options={{title:'Details'}} />
        
      </Navigator>
      
    </NavigationContainer>
    
  );
};



export default App;
