import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/Home';
import Details from './src/components/Details';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: '#162533',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign: 'right',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
