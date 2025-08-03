import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../components/Home';
import { View } from 'react-native';
import Header from '../../components/Header';
import TabBottom from '../../components/TabBottom';
import Messages from './Messages';
import { useNavigation } from '@react-navigation/native';
import Profile from '../../components/Profile';
const Stack = createNativeStackNavigator();

function BodyNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    const navigation = useNavigation();
    
    const TabBtm = [
        { id:1, title: 'Home', iconUri: 'https://img.icons8.com/?size=100&id=73&format=png' },
        { id:2, title: 'Messages', iconUri: 'https://img.icons8.com/?size=100&id=38977&format=png' },
        { id:4, title: 'Profile', iconUri: 'https://img.icons8.com/?size=100&id=7820&format=png' },
    ]
    return (
        <View 
        style={{
            flex:1,
            justifyContent: 'space-between'
        }}>
            <Header />
            <BodyNavigation />

            <TabBottom Data={TabBtm} navigation={navigation} />
        </View>
  );
}