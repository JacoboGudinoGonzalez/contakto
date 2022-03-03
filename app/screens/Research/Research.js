import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    Alert,
    TextInput,
    SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

import Loading from "../../components/Loading";

import ResearchList from "../../components/Research/ResearchList";

export default function Research() {

    const [researchList, setResearchList] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("userData").then(res => {
            setLoading(true);
            var json = JSON.parse(res);
            var token = json.access_token;
            if (token) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + token);

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://contakto.daangu.com/api/investigacion/list/", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setLoading(false);
                        if (result.message) {
                            setResearchList(result.data);
                        } else {
                            Alert.alert("No hay datos");
                        }

                    })
                    .catch(error => {
                        setLoading(false);
                        console.log('error', error)
                    });
            } else {
                setLoading(false);
                setLogin(false);
            }
        })
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.formContent}>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/search/androidL/100/000000' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Search"
                        underlineColorAndroid='transparent' />
                </View>
            </View>
            <ResearchList researchList={researchList} />
            <Loading isVisible={loading} text="Cargando.." />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },

    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
});  