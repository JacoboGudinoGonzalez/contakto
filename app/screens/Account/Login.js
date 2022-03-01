import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login() {

    const toastRef = useRef();
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/logo.png")}
                resizeMode="center"
                style={styles.logo}

            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef} />
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Divider style={styles.divider} />
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        marginTop: 40
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: "#428bca",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#428bca",
        margin: 40
    }
});