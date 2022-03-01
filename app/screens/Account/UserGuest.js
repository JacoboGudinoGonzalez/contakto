import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

export default function UserGuest() {
    const navigation = useNavigation();
    return (

        <KeyboardAwareScrollView centerContent={true}>
            <Image
                source={require("../../../assets/logo.png")}
                resizeMode="center"
                style={styles.logo}
            />
            <Text style={styles.title}>Inicia Sesión</Text>
            <Text style={styles.description}>Ir a la pantalla de inicio de sesión para continuar</Text>
            <View style={styles.viewBtn}>
                <Button
                    title="Ver perfil"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("login")}
                />
            </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    logo: {
        marginTop: 100,
        width: "100%",
        marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    viewBtn: {
        flex: 1,
        alignItems: "center"
    },
    btnStyle: {
        backgroundColor: "#428bca"
    },
    btnContainer: {
        width: "70%"
    }
});