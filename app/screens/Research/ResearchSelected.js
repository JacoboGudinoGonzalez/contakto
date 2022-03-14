import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Icon } from "react-native-elements";

const DATA = [
    { id: 1, description: "Adjuntos", date: "Fotografías de documentos requeridos", color: 'white', icon: "attachment", nav: true },
    { id: 2, description: "Formulario", date: "Llenado de formularios", color: '#e2e2e2', icon: "newspaper", nav: false }
];

export default function ResearchSelected(props) {

    const { navigation, route } = props;
    const { id, name } = route.params;
    const [research, setResearch] = useState(null);

    navigation.setOptions({ title: name });

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Selecciona la operación que deseas realizar</Text>
            <FlatList
                style={styles.tasks}
                columnWrapperStyle={styles.listContainer}
                data={DATA}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => { item.nav ? navigation.navigate("research-detail", { id }) : false }}>
                            <Icon
                                type="material-community"
                                name={item.icon}
                                iconStyle={styles.image}
                            />
                            <View style={styles.cardContent}>
                                <Text style={[styles.description, item.description]}>{item.description}</Text>
                                <Text style={styles.date}>{item.date}</Text>
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
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 0,
        color: '#9d3b31'
    },
    cardContent: {
        marginLeft: 20,
    },
    image: {
        width: '100%'
    },

    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderLeftWidth: 6,
        borderRadius: 10
    },

    description: {
        fontSize: 18,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
}); 