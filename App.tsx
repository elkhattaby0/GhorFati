import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Welcome from './app/screens/welcome';
import Register from './app/screens/Auth/Register';
import Login from './app/screens/Auth/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import User from './app/screens/User/User';

const Root = createNativeStackNavigator();


export default function App() {
  const [userRole, setUserRole] = useState('user');

  const [fontsLoaded] = useFonts({
    'Cairo': require('./assets/fonts/Cairo-Light.ttf')
  })
  if (!fontsLoaded) return null;

  return (
    <View
      style={styles.container}
    >
      <SafeAreaView  style={{ flex: 1 }}>

        <NavigationContainer>
          <Root.Navigator screenOptions={{ headerShown: false }}>
            {
              !userRole ? (
                <>
                  <Root.Screen name='welcome' component={Welcome} />
                  <Root.Screen name='login' component={Login} />
                  <Root.Screen name='register' component={Register} />
                </>
              ) : (
                <>
                  {
                    userRole === "user" && (
                      <Root.Screen name='user' component={User} />
                    )
                  }
                </>
              )
            }
            
          </Root.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Cairo',
    paddingLeft: 20, paddingRight: 20,
    paddingTop: 40, paddingBottom: 40,
    backgroundColor: '#f1f1f1'
  },
})