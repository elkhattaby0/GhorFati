import { View, Pressable, Image, Text, StyleSheet } from "react-native"

type TabItem  = {
    id: number;
    title: string;
    iconUri: string;
}
type TabBottomProps = {
  Data: TabItem[];
  navigation: any;
};


export default function TabBottom({ Data, navigation }: TabBottomProps) {
    const currentRoute = navigation.getState().routes[navigation.getState().index].name;
    return (
        <View
            style={styles.view}
        >
            {
                Data.map(n=> (
                    <Pressable 
                        key={n.id} 
                        style={[styles.btn,
                            n.id === 1 && { backgroundColor: '#fdb827', }
                        ]}
                        onPress={()=>  navigation.navigate('Navigation', {screen: n.title})}
                    >
                        <Image
                            source={{ uri: `${n.iconUri}` }}
                            style={styles.icon}
                        />
                        <Text style={styles.txt}>{n.title}</Text>
                    </Pressable>
                ))
            }            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 60, marginTop: 10, backgroundColor:  '#e0e0e0', 
        flexDirection: 'row', alignItems:'center', justifyContent:'space-around',
        borderRadius: 10, 
    },
    btn: {
        alignItems: 'center', paddingTop: 5, paddingBottom: 5, 
        borderRadius: 10, padding: 15, 
        width: "33.33%"
    },
    icon: {
        width: 25, height: 25, tintColor: '#23120b'
    },
    txt: {
        color: '#23120b', 
        fontSize: 18,
        padding:0, margin:0    
    }
})