import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import UserLogged from "../screens/Account/UserLogged";
import Home from "../screens/Home"
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();
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

    console.log(login)



    // if (login) {
    //     return (


    //         <NavigationContainer>
    //             <Stack.Navigator>
    //                 <Stack.Screen name="research-stack" component={ResearchStack} />
    //                 {/* <Stack.Screen name="Sign Up" component={UserRegistrationScreen} /> */}
    //                 <Stack.Screen name="user-logged" component={UserLogged} />
    //             </Stack.Navigator>
    //         </NavigationContainer>



    // <NavigationContainer>
    //     <Tab.Navigator
    //         initialRouteName="research-stack"
    //         activeColor="#428bca"
    //         inactiveColor="#646464"
    //         screenOptions={({ route }) => ({
    //             tabBarIcon: ({ color }) => screenOptions(route, color)
    //         })}
    //     >
    //         <Tab.Screen
    //             name="research-stack"
    //             component={ResearchStack}
    //             options={{ title: "Investigaciones", headerShown: false }}
    //         />
    //         <Tab.Screen
    //             name="home"
    //             component={Home}
    //             options={{ title: "Inicio" }}
    //         />
    //         <Tab.Screen
    //             name="user-logged"
    //             component={UserLogged}
    //             options={{ title: "Usuario" }}
    //         />
    //     </Tab.Navigator>
    // </NavigationContainer>
    // )
    // } else {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="account-stack" component={AccountStack} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="user-logged" component={UserLogged} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    // }



}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "home":
            iconName = "house"
            break;
        case "research-stack":
            iconName = "nature-people"
            break;
        case "account-stack":
            iconName = "account-circle"
            break;
        case "user-logged":
            iconName = "user"
            break;
        default:
            break;
    }

    return (
        <Icon
            type="mateiral-community"
            name={iconName}
            size={22}
            color={color} />
    )
}