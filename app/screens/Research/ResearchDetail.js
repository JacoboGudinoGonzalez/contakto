import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView,
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading';
import Adjuntos from '../../components/Adjuntos';
import { Url } from '../../utils/global';

export default function ResearchDetail(props) {
    const isFocused = useIsFocused();
    const { route } = props;
    const { id } = route.params;

    const [loading, setLoading] = useState(false);
    const [docsList, setDocsList] = useState(null);

    const urlGlobal = Url;
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

                fetch(urlGlobal + "/api/investigacion/" + id + "/detalle", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result[0].id) {
                            var datos = result[0];
                            var adjuntosArr = datos.adjuntos;
                            if (adjuntosArr.length == 1) {
                                setDocsList(adjuntosArr[0]);
                                setLoading(false);
                            } else {
                                const arr = emptyArr();
                                arr.investigacion = id;
                                setDocsList(arr);
                                setLoading(false);
                            }
                        }
                    })
                    .catch(error => {
                        console.log('error', error);
                        setLoading(false);
                    });
            } else {
                setLoading(false);
            }
        })
    }, [props, isFocused]);

    if (!docsList) {
        return (<Loading isVisible={loading} text="Cargando.." />);
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Adjuntos docsList={docsList} />
            </ScrollView>
        </SafeAreaView>
    );
}

function emptyArr() {
    const arr = {};
    arr.adj2 = null;
    arr.adj3 = null;
    arr.adj4 = null;
    arr.adj5 = null;
    arr.adj6 = null;
    arr.adj9 = null;
    arr.adj10 = null;
    arr.adj13 = null;
    arr.adj11 = null;
    arr.adj12 = null;
    arr.adj14 = null;
    arr.adj22 = null;
    arr.adj23 = null;
    arr.adj24 = null;
    arr.adj17 = null;
    arr.adj16 = null;
    arr.adj8 = null;
    arr.adj25 = null;
    arr.adj26 = null;
    arr.adj27 = null;
    arr.adj28 = null;
    arr.adj7 = null;
    arr.adj36 = null;
    arr.adj18 = null;
    arr.adj37 = null;
    arr.adj19 = null;
    arr.adj20 = null;
    arr.adj21 = null;
    arr.adj29 = null;
    arr.adj30 = null;
    arr.adj31 = null;
    arr.adj32 = null;
    arr.adj33 = null;
    arr.adj34 = null;
    arr.adj35 = null;
    return arr;
}
