import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUpScreen } from '../../../screens/SignUp/SignUpScreen';
import { HomeScreen } from '../../../screens/Home/HomeScreen';

import { MainStackParamList } from './main-stack.props';

export const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};
