import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from "../Loading";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validation";
import { size, isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native"
import { Url } from '../../utils/global';

export default function LoginForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const urlGlobal = Url;

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show("Campos obligatorios");
        } else if (!validateEmail(formData.email)) {
            toastRef.current.show("Email incorrecto");
        } else if (size(formData.password) < 4) {
            toastRef.current.show("Contraseña debe de tener al menos 4 caractéres");
        } else {
            setLoading(true);
            var dataToSend = {
                client_id: "JOlsOA44YHXCAveAQdu0GUiOdq0QetBt9MQFMvjB",
                client_secret: "MHwHIKaPtaamDjNiTs8U8Lb0bwBh2EQWfR4htkQZSCRgCBW3EeNyG79e7YAiHM76bpFIfevYJKrvHO5jvYZONQeDWic6uRSDMKMNRyZwsdaFrWBqWmtwrRs2tW81kMgs",
                grant_type: "password",
                username: formData.email,
                password: formData.password
            };
            var formBody = [];
            for (var key in dataToSend) {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');

            fetch(urlGlobal + '/api/auth/token/', {
                method: 'POST',
                body: formBody,
                headers: {
                    'Content-Type':
                        'application/x-www-form-urlencoded;charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    try {
                        setLoading(false);
                        storeData(JSON.stringify(responseJson));
                        AsyncStorage.getItem("userData").then(res => {
                            var json = JSON.parse(res);
                            var token = json.access_token;
                            if (token) {
                                //setFormData(defaultFormValue);
                                navigation.navigate("home");
                            } else {
                                toastRef.current.show("Credenciales incorrectas, favor de verificar");
                            }
                        });
                    } catch (error) {
                        setLoading(false);
                        console.log("Something went wrong", error);
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    alert(JSON.stringify(error));
                    console.error(error);
                });
        }
    }

    const storeData = async (value) => {
        await AsyncStorage.setItem('userData', value)
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <View style={styles.formContainer}>
            <Input
                autoCapitalize='none'
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                autoCapitalize='none'
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={e => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Iniciar Sesión"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Iniciando Sesión" />
        </View>
    )
}

function defaultFormValue() {
    return {
        email: "",
        password: ""
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    btnContainerLogin: {
        marginTop: 20,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#428bca"
    }
})