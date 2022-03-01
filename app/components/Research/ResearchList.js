import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";
import { map } from "lodash";

export default function ResearchList(props) {
    const { researchList } = props;

    console.log(researchList);

    const navigation = useNavigation();
    return (
        <FlatList
            style={styles.notificationList}
            data={researchList}
            keyExtractor={(item) => {
                return item.id;
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={[styles.card, { borderColor: 'black' }]} onPress={() => navigation.navigate("research-selected")}>
                        <View style={styles.cardContent}>
                            <View style={styles.contact}>

                                <Icon
                                    type="material-community"
                                    name="phone"
                                    iconStyle={styles.iconRight}
                                    onPress={() => { Alert.alert(item.telefono[0].numero); }}
                                />
                                <Icon
                                    type="material-community"
                                    name="directions"
                                    iconStyle={styles.iconRight}
                                    onPress={() => { Alert.alert(item.direccion[0].calle); }}
                                />
                                <Icon
                                    type="material-community"
                                    name="information"
                                    iconStyle={styles.iconRight}
                                    onPress={() => { Alert.alert("Información adicional"); }}
                                />

                            </View>
                            <Image style={[styles.image, styles.imageContent]} source={{ uri: item.icon }} />
                            <Text style={styles.name}>{item.candidato.nombre + item.candidato.apellido}</Text>
                        </View>
                        <View style={[styles.cardContent, styles.tagsContent]}>
                            {/* {map(item.tags, (tag, key) => (
                                <TouchableOpacity key={key} style={styles.btnColor} onPress={() => { Alert.alert(tag); }}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </TouchableOpacity>
                            ))} */}

                            <TouchableOpacity style={styles.btnColor} onPress={() => {
                                Alert.alert(
                                    item.agente.first_name + " " + item.agente.last_name
                                    +
                                    "\n"
                                    +
                                    item.agente.email
                                    +
                                    "\n"
                                    +
                                    item.compania.nombre
                                );
                            }}>
                                <Text style={styles.tagText}>Estudio socioeconómico</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        padding: 10,
    },
    card: {
        height: null,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderTopWidth: 40,
        marginBottom: 10,
        borderRadius: 10
    },
    cardContent: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    imageContent: {
        marginTop: -30,
    },
    tagsContent: {
        marginTop: 5,
        flexWrap: 'wrap'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center',
        color: '#9d3b31'
    },
    contact: {
        position: 'absolute',
        right: 0,
        top: -35,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    iconRight: {
        width: 30,
        height: 30,
        color: 'white',
    },
    btnColor: {
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 3,
        backgroundColor: "#eee"
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    tagText: {
        fontSize: 12
    }
});  