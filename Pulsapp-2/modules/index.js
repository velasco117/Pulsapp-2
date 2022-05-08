import { Text, View, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "mobx-react";

import LoginF from './Login/Login';
import NewsView from './News/News';
import Maintenance from './Maintenance/Maintenance';
import SlideMenu from './SlideMenu/SlideMenu';
import Detail from './Detail/Detail';
import Report from './Report/Report';
import CreateNovelty from "./CreateNovelty/CreateNovelty";

/* const MainNavigator = createStackNavigator(
    {
      Login: LoginF, 
      News: NewsView
       News: MyDrawerNavigator,
    },
    {
      initialRouteName: 'Login',
    },
  );
  const AppContainer = createAppContainer(MainNavigator); */
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const newsComponent = () => {
      return (
          <Drawer.Navigator>
              <Drawer.Screen name='Novedades' component={NewsView} options={{headerShown: false}}/>
              <Drawer.Screen name='Maintenance' component={Maintenance} options={{headerShown: false}}/>
              <Drawer.Screen name='Create novelty' component={CreateNovelty} options={{headerShown: false}}/>
          </Drawer.Navigator>
      )
  }
export default class index extends Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginF} options={{headerShown: false}}/>
                <Stack.Screen name='News' component={newsComponent} options={{headerShown: false}}/>
                <Stack.Screen name='Detail' component={Detail} options={{headerShown: false}}/>
                <Stack.Screen name='Report' component={Report} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}