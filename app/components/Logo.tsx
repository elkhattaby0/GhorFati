import { StyleSheet, Text } from "react-native"

export default function Logo() {
    return (
        <Text style={style.logo}>GhorFati</Text>
    )
} 

const style = StyleSheet.create({
    logo: {
        fontSize: 35,
        fontWeight: 800,
        letterSpacing: 4,
        width: '100%',
        color: '#23120b',
        // textTransform: 'uppercase',
        // borderWidth: 2,
        // marginBottom: 15
    }
})