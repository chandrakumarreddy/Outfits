import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './src/Screens/Authentication/Onboarding';
const AuthenticationStack = createStackNavigator();

const AuthenticationScreen = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticationScreen />
    </NavigationContainer>
  );
}
