import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../components/Profile';
import Home from '../../components/Home';
import Header from '../../components/Header';
import TabBottom from '../../components/TabBottom';
import CardDetail from '../../components/CardDetail';

const UserStack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    const TabBtm = [
        { id:1, title: 'home', iconUri: 'https://img.icons8.com/?size=100&id=73&format=png' },
        { id:2, title: 'messages', iconUri: 'https://img.icons8.com/?size=100&id=38977&format=png' },
        { id:4, title: 'profile', iconUri: 'https://img.icons8.com/?size=100&id=7820&format=png' },
    ]
    return (
        <>
            <Header />
            <Home navigation={navigation} />
            <TabBottom Data={TabBtm} navigation={navigation} />
        </>
    )
}

export default function User(){
    return (
        <UserStack.Navigator screenOptions={{ headerShown: false }}>
            <UserStack.Screen name='user' component={HomeScreen} />
            <UserStack.Screen name='profile' component={Profile} />
            <UserStack.Screen name='cardDetail' component={CardDetail} />
        </UserStack.Navigator>
    )
}