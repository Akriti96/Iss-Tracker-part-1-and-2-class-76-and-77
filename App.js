import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import HomeScreen from "./Screens/HomeScreen"
import ISSLocationScreen from "./Screens/ISSlocation"
import UpdateScreen from "./Screens/updates"
import MeteorsScreen from "./Screens/Meteros"

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
         <Stack.Screen name="Meteors" component={MeteorsScreen}/>
         <Stack.Screen name="update" component={UpdateScreen}/>



        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
