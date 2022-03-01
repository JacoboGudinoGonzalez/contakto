import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import UserLogged from "../screens/Account/UserLogged";
import ResearchStack from "../navigations/ResearchStack";

const Tab = createBottomTabNavigator();

export default function Home() {

    return (
        <Tab.Navigator
            initialRouteName="research-stack"
            activeColor="#428bca"
            inactiveColor="#646464"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}
        >
            <Tab.Screen
                name="research-stack"
                component={ResearchStack}
                options={{ title: "Investigaciones", headerShown: false }}
            />
            <Tab.Screen
                name="user-logged"
                component={UserLogged}
                options={{ title: "Usuario" }}
            />
        </Tab.Navigator>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "research-stack":
            iconName = "nature-people"
            break;
        case "account-stack":
            iconName = "account-circle"
            break;
        case "user-logged":
            iconName = "account-circle"
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