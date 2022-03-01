import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Switch
} from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const DATA = [
    { id: 1, description: "INE", date: "2019-03-25 09:12:00", color: "#228B22", completed: 1, enabled: true },
    { id: 2, description: "Comprobante de domicilio", date: "2019-03-25 10:23:00", color: "#FF00FF", completed: 0, enabled: false },
    { id: 3, description: "Acta de nacimiento", date: "2019-03-25 11:45:00", color: "#4B0082", completed: 1, enabled: false },
    { id: 4, description: "Comprobante de estudios", date: "2019-03-25 09:27:00", color: "#20B2AA", completed: 0, enabled: true },
    { id: 5, description: "RFC", date: "2019-03-25 08:13:00", color: "#000080", completed: 0, enabled: true },
    { id: 6, description: "CURP", date: "2019-03-25 10:22:00", color: "#FF4500", completed: 1, enabled: false },
    { id: 7, description: "Afiliacion al IMSS", date: "2019-03-25 13:33:00", color: "#FF0000", completed: 0, enabled: true },
    { id: 8, description: "Cartas de recomendacion", date: "2019-03-25 11:56:00", color: "#EE82EE", completed: 0, enabled: false },
    { id: 9, description: "Carta de antecedentes no penales", date: "2019-03-25 15:00:00", color: "#6A5ACD", completed: 0, enabled: true },
    { id: 10, description: "Otros", date: "2019-03-25 12:27:00", color: "#DDA0DD", completed: 0, enabled: false },
];

export default function ResearchDetail() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (e) => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();
    return (<View style={styles.container}>
        <FlatList
            style={styles.tasks}
            columnWrapperStyle={styles.listContainer}
            data={DATA}
            keyExtractor={(item) => {
                return item.id;
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research") }}>
                        <Image style={styles.image} source={{
                            uri: item.completed == 1 ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png"
                        }} />
                        <View style={styles.cardContent}>
                            <Text style={[styles.description, item.description]}>{item.description}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <View style={styles.contact}>
                            <Switch
                                trackColor={{ false: "red", true: "green" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={item.enabled}
                                style={styles.iconRight}
                            />

                        </View>
                    </TouchableOpacity>
                )
            }} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    tasks: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
        borderRadius: 5
    },

    description: {
        fontSize: 18,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
    contact: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    iconRight: {
        width: 30,
        height: 30,
        right: -12,
        top: -40
    },
}); 