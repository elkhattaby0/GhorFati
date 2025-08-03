import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";


export default function Login({navigation}) {
    const [form, setForm] = useState({});

    const reg = [
        { label: "email", type: "email-address" },
        { label: "password", type: "secure" }
    ];

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    return (
        <ScrollView style={style.container} contentContainerStyle={style.scrollContent}>
            <Text style={style.title}>Welcome Back</Text>
            <Image
                source={require("../../../assets/login.png")}
                style={style.img}
            />

            <View style={style.form}>
                {
                    reg.map(n => (
                        <View key={n.label} style={style.labelInput}>
                            <Text style={style.label}>{n.label}</Text>
                            <TextInput
                                style={style.input}
                                placeholder={`Enter your ${n.label}`}
                                value={form[n.label] || ""}
                                onChangeText={(val) => handleChange(n.label, val)}
                                autoCapitalize="none"
                                keyboardType={n.type === "email-address" ? "email-address" : "default"}
                                secureTextEntry={n.type === "secure"}
                            />
                        </View>
                    ))
                }

                <Pressable onPress={() => alert("Forgot Password?")} style={style.forgotBtn}>
                    <Text style={style.forgotText}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={() => console.log(form)} style={style.btn}>
                    <Text style={style.btnText}>Login</Text>
                </Pressable>
            </View>

            <Pressable onPress={() => navigation.navigate('register')}>
                <Text style={style.loginText}>
                    I don't have an account, <Text style={style.loginBold}>Register</Text>
                </Text>
            </Pressable>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#f1f1f1",
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: "700",
        color: '#23120b',
        textAlign: 'center',
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    img: {
        width: '100%', height: 300, 
        objectFit: 'cover'
    },
    form: {
        rowGap: 10,
        width: '95%',
    },
    labelInput: {
        rowGap: 8
    },
    label: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: '500',
        color: '#23120b'
    },
    input: {
        backgroundColor: '#e0e0e0',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    forgotText: {
        color: '#21209c',
        fontSize: 14,
        fontWeight: '500',
    },
    btn: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fdb827',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 25,
        fontWeight: '600',
        color: '#23120b',
        textAlign: 'center',
    },
    loginText: {
        color: '#23120b',
        fontSize: 14,
        marginTop: 20
    },
    loginBold: {
        fontSize: 16,
        fontWeight: '600'
    }
});
