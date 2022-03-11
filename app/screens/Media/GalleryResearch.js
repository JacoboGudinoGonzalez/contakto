import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker';
import Loading from '../../components/Loading';
import { Url } from '../../utils/global';

export default function GalleryResearch(props) {
    const { navigation, route } = props;
    const { id, url, inv } = route.params;
    var title = name(id.toString());

    const urlGlobal = Url;

    const [loading, setLoading] = useState(false);

    navigation.setOptions({ title: title });

    // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [resultImage, setResultImage] = useState(null);



    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            //aspect: [4, 3],
            quality: 1,
        });
        setResultImage(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
        }
    }

    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            //aspect: [4, 3],
            quality: 1,
        });

        if (result.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }
        setResultImage(result);
        if (!result.cancelled) {
            setPickedImagePath(result.uri);
        }
    }

    const enviar = async () => {

        //console.log("ressss: ", resultImage);
        AsyncStorage.getItem("userData").then(res => {
            setLoading(true);
            debugger
            var json = JSON.parse(res);
            var token = json.access_token;
            if (token) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + token);

                var formdata = new FormData();
                //formdata.append("file", resultImage);

                formdata.append('file', resultImage.base64);

                //console.log(formdata);
                // const formdata = new FormData();
                // formdata.append('file', {
                //     name: "adj" + id + ".jpg",
                //     type: "image",
                //     uri: Platform.OS === 'ios' ?
                //         resultImage.uri.replace('file://', '')
                //         : resultImage.uri,
                // });

                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                };

                fetch(urlGlobal + "api/investigacion/adjunto/upload/?inv=" + inv + "&column_no=" + id, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        setLoading(false);
                        navigation.navigate("research-detail", { id });
                    })
                    .catch(error => {
                        console.log('error', error);
                        setLoading(false);
                    });
            } else {
                setLoading(false);
            }
        })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
                <Button onPress={showImagePicker} title="Galería" />
                <Button onPress={openCamera} title="Cámara" />
            </View>

            <View style={styles.imageContainer}>
                {
                    pickedImagePath !== '' && <Image
                        source={{ uri: pickedImagePath }}
                        style={styles.image}
                    />
                }
                {
                    url != null && pickedImagePath == '' ? <Image
                        source={{ uri: urlGlobal + url }}
                        style={styles.image}
                    /> : <View></View>
                }
            </View>
            {resultImage ? (<Button title="enviar" onPress={enviar} />) : <View></View>}
            <Loading isVisible={loading} text="Cargando.." />
        </View>
    );
}

function name(n) {
    var title = "";
    switch (n) {
        case "2":
            title = '1. Foto de perfil del candidato'
            break;
        case "3":
            title = '2.a Interior derecho'
            break;
        case "4":
            title = '2.b Interior izquierdo'
            break;
        case "5":
            title = '2.c Exterior derecho'
            break;
        case "6":
            title = '2.d Exterior izquierdo'
            break;
        case "9":
            title = '2.e Frente'
            break;
        case "10":
            title = '3. Gestor Entrevistador'
            break;
        case "13":
            title = '4. Croquis'
            break;
        case "11":
            title = '5. Aviso Privacidad'
            break;
        case "12":
            title = '6. Constancia'
            break;
        case "14":
            title = '7.a Identificación con fotografia'
            break;
        case "22":
            title = '7.b Identificación con fotografia'
            break;
        case "23":
            title = '7.c Identificación con fotografia'
            break;
        case "24":
            title = '7.d Identificación con fotografia'
            break;
        case "17":
            title = '8. Acta de nacimiento'
            break;
        case "16":
            title = '9. Comprobante de domicilio'
            break;
        case "8":
            title = '10.a Semanas Cotizadas'
            break;
        case "25":
            title = '10.b Semanas Cotizadas'
            break;
        case "26":
            title = '10.c Semanas Cotizadas'
            break;
        case "27":
            title = '10.d Semanas Cotizadas'
            break;
        case "28":
            title = '10.e Semanas Cotizadas'
            break;
        case "7":
            title = '11.a Validación de Demandas Laborales'
            break;
        case "36":
            title = '11.b Validacion web'
            break;
        case "18":
            title = 'Carta Laboral'
            break;
        case "37":
            title = 'Carta Laboral Extra'
            break;
        case "19":
            title = 'Adicionales A'
            break;
        case "20":
            title = 'Adicionales B'
            break;
        case "21":
            title = 'Adicionales C'
            break;
        case "29":
            title = 'Adicionales D'
            break;
        case "30":
            title = 'Adicionales E'
            break;
        case "31":
            title = 'Adicionales F'
            break;
        case "32":
            title = 'Adicionales G'
            break;
        case "33":
            title = 'Adicionales H'
            break;
        case "34":
            title = 'Adicionales I'
            break;
        case "35":
            title = 'Extra A'
            break;

        default:
            break;
    }
    return title;
}

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageContainer: {
        margin: 10,
        padding: 10,
        width: '90%'
    },
    image: {
        height: 500,
        padding: 200
    }
});