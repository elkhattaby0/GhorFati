import { StyleSheet, ScrollView, View, Text, Dimensions, Image, TextInput } from "react-native";
import Card from "./Card";
import CitesCard from "./CitesCard";
import Carousel from 'react-native-reanimated-carousel';


const casablanca = "https://images.unsplash.com/photo-1538230575309-59dfc388ae36?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const rabat = "https://images.unsplash.com/photo-1598022124758-26d09adcb7b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const marrakech = "https://images.unsplash.com/photo-1740381971575-92907071bc5f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const tangire = "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ports-and-destinations/ports/tangier-morocco/overview/tangier-morroco-city-aerial-view-bay-port.jpg?$750x320$"
const agadir = "https://c4.wallpaperflare.com/wallpaper/217/287/718/agadir-wallpaper-preview.jpg"

const windowWidth = Dimensions.get('window').width - 45;

export default function Home({navigation}) {
    const Cities = [
        { name: "Casablanca", color: "#005f73", Image: casablanca },
        { name: "Rabat", color: "#0a9396", Image: rabat },
        { name: "Marrakech", color: "#bb3e03", Image: marrakech },
        { name: "Tangier", color: "#94d2bd", Image: tangire },
        { name: "Agadir", color: "#ee9b00", Image: agadir },
        // { name: "Other", color: "#6a4c93", Image: "" }
        ];
    

    return (
        <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flexDirection: 'row', alignItems: 'center', height: 50,
                    backgroundColor: '#e0e0e0', borderBottomRightRadius: 10, borderBottomLeftRadius: 10,
                    marginBottom: 20
                }}
            >
                <Image
                    source={
                        require("../../assets/search.png")
                    }
                    style={{
                        width: 20, height: 20, padding: 0,
                        marginLeft: 18, marginRight: 18,
                    }}    
                    
                />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#23120b"
                    style={{
                        width: Dimensions.get('window').width - 115,
                        height: 50,
                        fontSize: 20,
                        color: '#23120b',
                        fontWeight: "600",
                    }}
                />
            </View>
            <Card navigation={navigation}
                imageUri={"https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=1024x1024&w=is&k=20&c=EmpbOMOx61HMHbi1wAfacfobu_P3jwsCX3FGnMoNgCY="}
                Title="Rent Room"
                City="Agaidr"
            />

            <View >
                <Text 
                    style={{fontSize: 20, fontWeight: 400, color: '#23120b', marginTop:20, marginBottom:10}}
                >Browse by City</Text>
                
                    {
                        <Carousel
                            loop={false}
                            width={160}
                            height={90}
                            autoPlay={false}
                            data={Cities}
                            snapEnabled={true}
                            // pagingEnabled={false}
                            scrollAnimationDuration={500}
                            style={{width:'100%'}}
                            renderItem={({item})=> (
                                <CitesCard Name={item.name} Color={item.color} ImageUri={item.Image} />
                            )}
                        />   
                    }
                    
            </View>

            <View >
                <Text 
                    style={{fontSize: 20, fontWeight: 400, color: '#23120b', marginTop:20, marginBottom:10}}
                >Top Picks for You</Text>
                
                    {
                        <Carousel
                            loop={true}
                            width={windowWidth}
                            height={250}
                            autoPlay={true}
                            data={Cities}
                            snapEnabled={true}
                            // pagingEnabled={false}
                            scrollAnimationDuration={1000}
                            style={{width:'100%'}}
                            renderItem={({item})=> (
                                <Card Title={item.name} City={"Maroc"} imageUri={item.Image} navigation={navigation} />
                            )}
                        />   
                    }
                    
            </View>
           
            <View style={{
                width:'100%', marginTop: 20,
                flexDirection: "column", gap: 10
                }}>
                {
                    Cities.map(n=> (
                        <View 
                            key={n.name}
                            style={{
                                // backgroundColor:'red', 
                                // borderWidth: 1,
                                borderRadius: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 20
                            }}    
                        >
                            <Image 
                                source={{ uri: `${n.Image}`}}
                                style={{
                                    height: 90,
                                    width: 130,
                                    objectFit: 'cover',
                                    borderRadius:10,
                                }}
                            />
                            <View style={{
                                borderWidth: 2, height: '100%',
                            }}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "#23120b"
                                    }}
                                >{n.name}</Text>
                                <Text>100.00 MAD</Text>
                            </View>
                        </View>  
                    ))
                }

            </View>

                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})