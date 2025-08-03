import { Picker } from "@react-native-picker/picker";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Register({navigation}) {
    const [form, setForm] = useState({});

    const reg = [
        { label: "full name", type: "text" },
        { label: "gender", type: "option", options: ["male", "female"], width: true },
        { label: "role", type: "option", options: ["owner", "student"], width: true },
        { label: "city", type: "option", options: ["tanger", "casablanca", "agadir"] },
        { label: "email", type: "email-address" },
        { label: "password", type: "secure" },
        { label: "confirm password", type: "secure" },
    ];

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    return (
        <ScrollView style={style.container} contentContainerStyle={style.scrollContent}>
            <Text style={style.title}>Get Started</Text>

            <View style={style.form}>
                {
                    reg.map(n => (
                        <View
                            key={n.label}
                            style={[style.labelInput, n.width ? { width: '48%' } : { width: '100%' }]}
                        >
                            <Text style={style.label}>{n.label}</Text>

                            {n.type === "option" ? (
                                <View style={style.pickerWrapper}>
                                    <Picker
                                        selectedValue={form[n.label] || ""}
                                        onValueChange={(val) => handleChange(n.label, val)}
                                        style={style.picker}
                                    >
                                        <Picker.Item label="Select..." value="" />
                                        {n.options.map(opt => (
                                            <Picker.Item key={opt} label={opt} value={opt} />
                                        ))}
                                    </Picker>
                                </View>
                            ) : (
                                <TextInput
                                    style={style.input}
                                    placeholder={`Enter your ${n.label}`}
                                    value={form[n.label] || ""}
                                    onChangeText={(val) => handleChange(n.label, val)}
                                    autoCapitalize="none"
                                    keyboardType={n.type === "email-address" ? "email-address" : "default"}
                                    secureTextEntry={n.type === "secure"}
                                />
                            )}
                        </View>
                    ))
                }

                <Pressable onPress={() => console.log(form)} style={style.btn}>
                    <Text style={style.btnText}>Register</Text>
                </Pressable>
            </View>

            <Pressable  onPress={() => navigation.navigate('login')}>
                <Text style={style.loginText}>
                    Already have an <Text style={style.loginBold}>Account</Text>
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
    form: {
        rowGap: 10,
        width: '95%',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
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
    pickerWrapper: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden' 
    },
    picker: {
        height: 50,
        paddingHorizontal: 10
    },
    btn: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fdb827',
        justifyContent: 'center',
        marginTop: 20
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
