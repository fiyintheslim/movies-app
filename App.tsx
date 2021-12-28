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
import Navbar from './components/Navbar'
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
      <Navigator>
        <Screen name='Home' component={Home} options={{
          title:'Home Screen',
          headerTransparent:true,
          header:(navigation)=> <Navbar navigation={navigation} main={true} />,
          }} />
        <Screen name='Details' component={Detail} options={{
          title:'Details',
          headerTransparent: true,
          header:(navigation)=> <Navbar navigation={navigation} main={false} />,
          }} />
          <Screen name='Search' component={Detail} options={{
          title:'Search',
          headerTransparent: true,
          header:(navigation)=> <Navbar navigation={navigation} main={false} />,
          }} />
        
      </Navigator>
      
    </NavigationContainer>
    
  );
};



export default App;
