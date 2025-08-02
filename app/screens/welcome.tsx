import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.logo}>ghorFati</Text>
        <Text style={styles.sublogo}
        >Find your student room. Fast, Safe and Easy</Text>
      </View>

      <Image style={styles.middle}
        source={
          require("../../assets/welcoming.png")
        }
      />
      
      <Pressable style={styles.bottom}>
        <Text style={styles.btntext}>
          Get Started 
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    // borderWidth: 2,
  },

  top: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    fontSize: 60,
    textTransform: 'capitalize',
    fontWeight: 900,
    color: '#23120b',
    width: '100%',
    textAlign: 'center'
  },
  sublogo: {
    fontSize: 18,
    fontWeight: 500,
    color: '#23120b',
    paddingTop: 10
  },

  middle: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: 10,
  },
  bottom: {
    backgroundColor: '#fdb827', 
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '100%', 
    alignItems: 'center',
  },
  btntext: {
    fontSize: 25, fontWeight: 700, color: '#23120b',
  }
});
