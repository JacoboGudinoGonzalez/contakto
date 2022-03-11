import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading';
import Adjuntos from '../../components/Adjuntos';
import { Url } from '../../utils/global';

export default function ResearchDetail(props) {

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
                debugger
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + token);

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch(urlGlobal + "api/investigacion/" + id + "/detalle", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setLoading(false);
                        if (result[0].id) {
                            var datos = result[0];
                            var adjuntosArr = datos.adjuntos;
                            if (adjuntosArr.length == 1) {
                                setDocsList(adjuntosArr[0]);
                            } else {
                                const arr = [];
                                setDocsList(arr);
                            }


                        }

                    })
                    .catch(error => {
                        setLoading(false);
                        console.log('error', error)
                    });
            } else {
                setLoading(false);
            }
        })
    }, []);

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
