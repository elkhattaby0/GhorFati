import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Welcome from './app/screens/welcome';
// import Home from './app/screens/Home';
import Ghost from './app/screens/GhostScreen/Ghost';
import Profile from './app/screens/GhostScreen/Profile';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Cairo': require('./assets/fonts/Cairo-Light.ttf')
  })
  if (!fontsLoaded) return null;

  return (
    <View
      style={styles.container}
    >
      <SafeAreaView  style={{ flex: 1 }}>
        {/* <Welcome /> */}
        {/* <Home /> */}
        {/* <Ghost /> */}
        <Profile />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    fontFamily: 'Cairo',
    paddingLeft: 20, paddingRight: 20,
    paddingTop: 40, paddingBottom: 40,
    backgroundColor: '#f1f1f1'
  },
})