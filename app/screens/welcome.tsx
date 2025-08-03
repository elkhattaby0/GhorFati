import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logo}>ghorFati</Text>
        <Text style={styles.sublogo}>
          Find your student room. Fast, Safe, and Easy.
        </Text>
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/welcoming.png")}
        resizeMode="contain"
      />

      <View style={styles.buttonGroup}>
        <Pressable
          style={[styles.button, styles.loginBtn]}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.registerBtn]}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    fontSize: 48,
    fontWeight: '900',
    textTransform: 'capitalize',
    color: '#23120b',
  },
  sublogo: {
    fontSize: 17,
    fontWeight: '500',
    color: '#4a3b2e',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    objectFit: 'cover'
  },
  buttonGroup: {
    width: '100%',
    gap: 10,
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#fdb827', 
  },
  registerBtn: {
    backgroundColor: '#23120b', 
  },
  loginText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#23120b',
  },
  registerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f1f1f1',
  },
});
