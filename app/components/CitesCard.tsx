import { Pressable, Text, Image, View, StyleSheet } from "react-native";

type propCard = {
    Name: string;
    Color?: string;
    ImageUri: string;
};

export default function CitesCard({ Name, ImageUri="", Color = "#fdb827" }: propCard) {
    return (
        <Pressable
            onPress={() => alert(Name)}
            style={styles.btn}
        >
            {/* Background Image */}
            <Image
                source={{ uri: ImageUri }}
                style={styles.img}
                resizeMode="cover"
            />

            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            />

            <Text
                style={styles.txt}
            >
                {Name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 150,
        height: 90,
        borderRadius: 10,
        overflow: 'hidden', 
        // marginHorizontal: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    txt: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1,
        color: '#fff',
        zIndex: 2,
    }
})