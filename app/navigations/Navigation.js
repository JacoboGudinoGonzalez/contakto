import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserLogged from "../screens/Account/UserLogged";
import Home from "../screens/Home"
import AccountStack from "./AccountStack";

const Stack = createStackNavigator();

export default function Navigation() {

    const [login, setLogin] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("userData").then(res => {
            var json = JSON.parse(res);
            var token = json.access_token;
            if (token) {
                setLogin(true)
            } else {
                setLogin(false)
            }
        })
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="account-stack" component={AccountStack} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="user-logged" component={UserLogged} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}