import { View } from "react-native"
import Logo from "./Logo"

export default function Header() {
    return (
        <View
            style={{
                borderBottomWidth: 2,
                borderColor: "#e0e0e0",
                paddingBottom: 10
            }}
        >
            <Logo />
        </View>
    )
}