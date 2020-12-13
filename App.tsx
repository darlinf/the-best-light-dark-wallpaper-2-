import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './screens/test';
import Wallpaper from './screens/wallpaper';
import Carousel from './screens/wallpaper';
import Wallpapers from './screens/wallpapers';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes)

export default function App() {

const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Wallpapers' component={Wallpapers} options={{title: 'Wallpapers'}}/>
      <Stack.Screen name='Wallpaper' component={Wallpaper} options={{title: 'Wallpaper'}}/>

    </Stack.Navigator>
  )
}

  return ( 
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
