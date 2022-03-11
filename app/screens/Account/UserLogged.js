import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from "react-native";
import { StackActions } from '@react-navigation/native';
import { Button } from "react-native-elements/dist/buttons/Button";
import { useNavigation } from "@react-navigation/native"

export default function UserLogged() {

    const [login, setLogin] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("userData").then(res => {
            var json = JSON.parse(res);
            var token = json.access_token;
            if (token) {
                setLogin(true);
                setUser(token)
            } else {
                setLogin(false);
            }
        })
    }, []);

    const navigation = useNavigation();
    return (
        <View>
            <Text><Text></Text></Text>
            <Button title="Cerrar sesión"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => {
                    AsyncStorage.removeItem('userData');
                    navigation.dispatch(StackActions.popToTop());
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: "#428bca",
        marginTop: 80
    },
    btnContainer: {
        width: "100%",
        alignContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        alignSelf: "center",
        marginTop: 100
    }
});