import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Profile({navigation}) {
    const screenLinks = [
        { "name": "My Information", "img": "https://img.icons8.com/?size=100&id=77&format=png" },
        { "name": "My Bookings", "img": "https://img.icons8.com/?size=100&id=4027&format=png" },
        { "name": "My Reviews", "img": "https://img.icons8.com/?size=100&id=52209&format=png" },
        { "name": "Settings", "img": "https://img.icons8.com/?size=100&id=364&format=png" },
    ]
    return (
        <ScrollView style={{ height: '100%' }}> 
        <View 
            style={{
                height: Dimensions.get('window').height - 150,
                justifyContent: 'space-between'  
            }}
        >
            <View style={{
                flexDirection: 'row', 
                // borderWidth: 1,
                alignItems: 'center', padding: 0, margin: 0, gap: 15, 
                }}
            >
                <Pressable onPress={()=> navigation.navigate('user')}>
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/?size=100&id=7811&format=png'
                        }}
                        style={{
                            // borderWidth: 1,
                            width: 30, height: 30,
                            backgroundColor: '#e0e0e0', borderRadius: 8, padding: 18
                        }}
                    />
                </Pressable>
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: "800", color: '#23120b',
                        // marginTop: 15, marginBottom: 15
                    }}
                >Profile</Text>
                </View>
            <View
                style={{
                    // borderWidth: 1, 
                    height: '85%', flexDirection: 'column', justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems:'center', justifyContent: 'center',
                        // borderWidth: 1
                    }}
                >
                    <Image 
                        source={{
                            uri: 'https://img.icons8.com/?size=64&id=rrtYnzKMTlUr&format=png'
                        }}
                        style={{
                            alignItems: 'center', 
                            backgroundColor: '#e0e0e0',
                            height: 100, width: 100,
                            borderRadius: 100,
                            borderWidth: 1, borderColor: '#23120b',
                            marginTop: 20, objectFit: 'cover'
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 30, fontWeight: '500', color: '#23120b', padding: 0, margin: 0, 
                            marginTop: 10
                        }}
                    >Jhon Deo</Text>
                    <Text
                        style={{
                            fontSize: 20, fontWeight: '400', color: '#21209c', padding: 0, margin: 0, 
                            marginTop: 5
                        }}
                    >Student</Text>
                </View>

                <View style={{
                    // borderWidth: 1,
                    gap:15
                    }}
                >
                    {
                        screenLinks.map(n=> (
                            <TouchableOpacity key={n.name}
                                style={{
                                    backgroundColor: '#e0e0e0',
                                    width: '100%',
                                    height: 50,
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center', 
                                    alignItems: 'center',     
                                    padding: 0,
                                    margin: 0,
                                    alignSelf: 'center',
                                }}
                            >
                                <Image 
                                    source={{
                                        uri: n.img
                                    }}
                                    style={{
                                        height: 20, width: 20, marginRight: 14, marginLeft: 10
                                    }}
                                />
                                <Text
                                    style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    color: '#23120b',
                                    // borderWidth:1,
                                    width: '85%'
                                    }}
                                >
                                    {n.name}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        width: '100%',
                        height: 50,
                        borderRadius: 10,
                        justifyContent: 'center', 
                        alignItems: 'center',     
                        padding: 0,
                        margin: 0,
                        alignSelf: 'center',
                    }}
                >
                <Text
                    style={{
                    fontSize: 25,
                    fontWeight: '500',
                    color: '#f1f1f1',
                    }}
                >
                    Log Out
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}