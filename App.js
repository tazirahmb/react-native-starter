/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import 'react-native-gesture-handler';
import React from 'react';

import * as Pages from './src/pages';
import { ROUTES } from './src/configs';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={ROUTES.HOME}
          component={Pages.Home}
          options={{ title: 'Welcome' }}
        />
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={Pages.Profile}
          initialParams={{ name: 'Dunia' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
