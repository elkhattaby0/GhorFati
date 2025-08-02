import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from './Navigation';

const GhostStack = createNativeStackNavigator();

export default function Ghost() {
  
  return (
    <NavigationContainer>
      <GhostStack.Navigator screenOptions={{ headerShown: false }}>
        <GhostStack.Screen name='Navigation' component={Navigation} />
      </GhostStack.Navigator>
    </NavigationContainer>
  )
}
