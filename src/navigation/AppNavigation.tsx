import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from './navigation.props';
import { getAppNavigationContainerRef } from './navigation.ref';
import { MainStackScreen } from './navigators/main-stack/MainStackScreen';

const navigationContainerRef = getAppNavigationContainerRef();

export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationContainerRef}>
      <AppScreen />
    </NavigationContainer>
  );
  // return <Container />
};

export const Stack = createNativeStackNavigator<AppStackParamList>();

// –––––––––––––––––––––––––––––––––––––––––––
// APP Stack
// –––––––––––––––––––––––––––––––––––––––––––

const AppScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
