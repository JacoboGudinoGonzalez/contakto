import React, { useState } from 'react'
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
import { Divider, Icon, Button } from "react-native-elements";
import { map } from "lodash";
import Modal from '../Modal';

export default function ResearchList(props) {

    const { researchList } = props;
    const navigation = useNavigation();

    return (
        <FlatList
            style={styles.notificationList}
            data={researchList}
            renderItem={(item) => <Investigaciones item={item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

function Investigaciones(props) {
    const { item } = props;

    const { candidato, telefono, direccion, compania, sucursal, agente } = item.item;

    const [isModalVisible, setModalVisible] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);

    const selectedModal = (key, ...obj) => {
        switch (key) {
            case "iResearch":
                setRenderComponent(
                    <View>
                        <Text style={styles.modalLabel}>Compañía</Text><Text style={styles.modalText}>{obj[0].nombre}</Text>
                        <Divider />
                        <Text style={styles.modalLabel}>Sucursal</Text><Text style={styles.modalText}>{obj[1].nombre}</Text>
                        <Divider />
                        <Text style={styles.modalLabel}>Agente</Text>
                        <Text style={styles.modalText}>{obj[2].first_name} {obj[2].last_name}</Text>
                        <Text style={styles.modalText}>{obj[2].email}</Text>
                        <Divider />
                    </View>
                )
                break;
            case "iPhone":
                setRenderComponent(
                    map(obj[0], (t) => {
                        return (
                            <View>
                                <Text style={styles.modalLabel}>{t.categoria == 'casa' ? 'Casa' : t.categoria == 'movil' ? 'Móvil' : 'Recados'}</Text>
                                <Text style={styles.modalText}>{t.numero}</Text>
                                <Divider />
                            </View>
                        )
                    })
                );
                break;
            case "iDirections":
                setRenderComponent(
                    map(obj[0], (t) => {
                        return (
                            <View>
                                <Text style={styles.modalLabel}>Calle</Text><Text style={styles.modalText}>{t.calle}</Text>
                                <Divider />
                                <Text style={styles.modalLabel}>Ciudad</Text><Text style={styles.modalText}>{t.ciudad}</Text>
                                <Divider />
                                <Text style={styles.modalLabel}>Colonia</Text><Text style={styles.modalText}>{t.colonia}</Text>
                                <Divider />
                                <Text style={styles.modalLabel}>C.P.</Text><Text style={styles.modalText}>{t.cp}</Text>
                                <Divider />
                                <Text style={styles.modalLabel}>Estado</Text><Text style={styles.modalText}>{t.estado}</Text>
                                <Divider />
                            </View>
                        )
                    })
                );
                break;
            default:
                break;
        }
        setModalVisible(true);

    };

    return (
        <TouchableOpacity style={[styles.card, { borderColor: 'black' }]}
            onPress={() => navigation.navigate("research-selected", {
                item
            })}>
            <View style={styles.cardContent}>
                <View style={styles.contact}>

                    <Icon
                        type="material-community"
                        name="phone"
                        iconStyle={styles.iconRight}
                        onPress={() => selectedModal("iPhone", telefono)}
                    />
                    <Icon
                        type="material-community"
                        name="directions"
                        iconStyle={styles.iconRight}
                        onPress={() => selectedModal("iDirections", direccion)}
                    />
                    <Icon
                        type="material-community"
                        name="information"
                        iconStyle={styles.iconRight}
                        onPress={() => { Alert.alert("Información adicional"); }}
                    />

                </View>
                {/* <Image style={[styles.image, styles.imageContent]} source={{ uri: item.icon }} /> */}
                <Text style={styles.name}>{candidato.nombre} {candidato.apellido}</Text>
            </View>
            <View style={[styles.cardContent, styles.tagsContent]}>

                <TouchableOpacity style={styles.btnColor} onPress={() => selectedModal("iResearch", compania, sucursal, agente)}>
                    <Text style={styles.tagText}>Estudio socioeconómico</Text>
                </TouchableOpacity>

            </View>

            <Modal isVisible={isModalVisible} setVisible={setModalVisible} >
                {renderComponent}
            </Modal>

        </TouchableOpacity>
    );
}

function telefonos(data) {
    return map(data, (t) => {
        return (
            <View>
                <Text style={styles.modalLabel}>{t.categoria == 'casa' ? 'Casa' : t.categoria == 'movil' ? 'Móvil' : 'Recados'}</Text>
                <Text style={styles.modalText}>{t.numero}</Text>
                <Divider />
            </View>
        )
    });
}

const styles = StyleSheet.create({

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
        fontSize: 12,
        fontWeight: 'bold',
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
    },
    modal: { width: '80%', margin: 100, alignSelf: 'center' },
    modalView: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderBottomWidth: 1,
        alignItems: 'center',
        margin: 10,
        borderTopWidth: 40,
        borderColor: '#9d3b31',
        borderRadius: 10
    },
    modalLabel: { color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: 5 },
    modalText: { color: 'black', marginBottom: 5 },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    btnModalClose: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    btnModalCloseTitle:
        { color: 'rgba(78, 116, 289, 1)' }
});  