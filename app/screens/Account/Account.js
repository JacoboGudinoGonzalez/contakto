import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "../../components/Loading"
import UserGuest from "./UserGuest";
import Research from "../Research/Research";
import UserLogged from "./UserLogged";

export default function Account() {
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

    if (login === null) return <Loading isVisible={true} text="Cargando.." />

    return login ? <UserLogged /> : <UserGuest />;
}