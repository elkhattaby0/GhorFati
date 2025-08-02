import { Pressable, Image, Text, View, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

type CardProps = {
    imageUri: string;
    Title: string;
    City: string;
}

export default function Card({ imageUri, Title, City }: CardProps) {
    return (
        <Pressable
            style={styles.btn}
            >
            <Image
                source={{
                    uri: `${imageUri }`
                }}
                style={styles.img}
            />
            <LinearGradient
                colors={['#23120b', 'transparent']}
                start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}
                style={styles.overlay}
            />
                <View style={styles.view}>
                    <Text style={styles.title}>{Title}</Text>
                    <Text style={styles.city}>{City}</Text>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        height: 250,
        width: "100%",
        // boxShadow: "0 1px 2px #23120b"
        // boxShadow: "0 1px 2px red"
        
    },
    img: {
        width: "100%",
        height: '100%',
        objectFit: 'cover',
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        left: 0, top: 0,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%',
        position: "relative",
        bottom: 40,
        paddingLeft: 20, paddingRight: 20 
    },
    title: { 
        color: '#f1f1f1',
        fontSize: 22,
        fontWeight: 600,
        textTransform: 'capitalize'
    },
    city: {  
        color: '#f1f1f1cc',
        fontSize: 15,
        fontWeight: 500,
        textTransform: 'capitalize',
        backgroundColor: '#fdb827cc', 
        paddingLeft: 14, paddingRight: 14, paddingTop: 5, paddingBottom: 5,
        borderRadius: 100
    }
})