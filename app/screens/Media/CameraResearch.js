import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function CameraResearch({ navigation }) {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);

    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const permisionFunction = async () => {
        // here is how you can get the camera permission
        const cameraPermission = await Camera.requestCameraPermissionsAsync({
            allowsEditing: true
        });

        setCameraPermission(cameraPermission.status === 'granted');

        const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync({
            allowsEditing: true,
        });

        setGalleryPermission(imagePermission.status === 'granted');

        if (
            imagePermission.status !== 'granted' &&
            cameraPermission.status !== 'granted'
        ) {
            alert('Permission for media access needed.');
        }
    };

    useEffect(() => {
        permisionFunction();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync({
                allowsEditing: true,
                aspec
            });
            let resizedPhoto = await ImageManipulator.manipulate(
                photo.uri,
                [{ resize: { width: 108, height: 192 } }],
                { compress: 0, format: "jpg", base64: false }
            );
            FileSystem.moveAsync({
                from: resizedPhoto.uri,
                to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId
                    }.jpg`
            });
            this.setState({ photoId: this.state.photoId + 1 });
            Vibration.vibrate();
            setImageUri(photo.uri);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            //mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //aspect: [1, 1],
            quality: 1,

        });
        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={(ref) => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                />
            </View>

            <Button title={'Tomar foto'} onPress={takePicture}
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister} />
            {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1, width: "60%", alignSelf: "center" }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#081E26"
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        width: "60%",
        alignSelf: "center"
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
});