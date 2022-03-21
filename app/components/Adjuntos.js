import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Adjuntos(props) {
  const { docsList } = props;
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 2,
            url: docsList.adj2,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj2 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>
            1. Foto de perfil del candidato
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 3,
            url: docsList.adj3,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj3 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>2.a Interior derecho</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 4,
            url: docsList.adj4,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj4 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>2.b Interior izquierdo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 5,
            url: docsList.adj5,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj5 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>2.c Exterior derecho</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 6,
            url: docsList.adj6,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj6 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>2.d Exterior izquierdo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 9,
            url: docsList.adj9,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj9 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>2.e Frente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 10,
            url: docsList.adj10,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj10 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>3. Gestor Entrevistador</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 13,
            url: docsList.adj13,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj13 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>4. Croquis</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 11,
            url: docsList.adj11,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj11 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>5. Aviso Privacidad</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 12,
            url: docsList.adj12,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj12 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>6. Constancia</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 14,
            url: docsList.adj14,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj14 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>
            7.a Identificación con fotografía
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 22,
            url: docsList.adj22,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj22 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>
            7.b Identificación con fotografía
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 23,
            url: docsList.adj23,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj23 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>
            7.c Identificación con fotografía
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 24,
            url: docsList.adj24,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj24 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>
            7.d Identificación con fotografía
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 17,
            url: docsList.adj17,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj17 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>8. Acta de nacimiento</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 16,
            url: docsList.adj16,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj16 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>9. Comprobante de domicilio</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research", { id: 8, url: docsList.adj8, inv: docsList.investigacion }) }}>
                <Image style={styles.image} source={{ uri: docsList.adj8 != null ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png" }} />
                <View>
                    <Text style={[styles.description]}>10.a Semanas Cotizadas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research", { id: 25, url: docsList.adj25, inv: docsList.investigacion }) }}>
                <Image style={styles.image} source={{ uri: docsList.adj25 != null ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png" }} />
                <View>
                    <Text style={[styles.description]}>10.b Semanas Cotizadas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research", { id: 26, url: docsList.adj26, inv: docsList.investigacion }) }}>
                <Image style={styles.image} source={{ uri: docsList.adj26 != null ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png" }} />
                <View>
                    <Text style={[styles.description]}>10.c Semanas Cotizadas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research", { id: 27, url: docsList.adj27, inv: docsList.investigacion }) }}>
                <Image style={styles.image} source={{ uri: docsList.adj27 != null ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png" }} />
                <View>
                    <Text style={[styles.description]}>10.d Semanas Cotizadas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card]} onPress={() => { navigation.navigate("gallery-research", { id: 28, url: docsList.adj28, inv: docsList.investigacion }) }}>
                <Image style={styles.image} source={{ uri: docsList.adj28 != null ? "https://img.icons8.com/flat_round/64/000000/checkmark.png" : "https://img.icons8.com/flat_round/64/000000/delete-sign.png" }} />
                <View>
                    <Text style={[styles.description]}>10.e Semanas Cotizadas</Text>
                </View>
            </TouchableOpacity> */}
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 7,
            url: docsList.adj7,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj7 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>11.a Demandas Laborales</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 36,
            url: docsList.adj36,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj36 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>11.b Validación web</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 18,
            url: docsList.adj18,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj18 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Carta Laboral</Text>
        </View>
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 37,
            url: docsList.adj37,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj37 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Carta Laboral Extra</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 19,
            url: docsList.adj19,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj19 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales A</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 20,
            url: docsList.adj20,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj20 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales B</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 21,
            url: docsList.adj21,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj21 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales C</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 29,
            url: docsList.adj29,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj29 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales D</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 30,
            url: docsList.adj30,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj30 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales E</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 31,
            url: docsList.adj31,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj31 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales F</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 32,
            url: docsList.adj32,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj32 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales G</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 33,
            url: docsList.adj33,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj33 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales H</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 34,
            url: docsList.adj34,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj34 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Adicionales I</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          navigation.navigate("gallery-research", {
            id: 35,
            url: docsList.adj35,
            inv: docsList.investigacion,
          });
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              docsList.adj35 != null
                ? "https://img.icons8.com/flat_round/64/000000/checkmark.png"
                : "https://img.icons8.com/flat_round/64/000000/delete-sign.png",
          }}
        />
        <View>
          <Text style={[styles.description]}>Extra A</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
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
    height: 70,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    //flexBasis: '46%',
    paddingTop: 10,
    paddingStart: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 6,
    borderRadius: 5,
  },

  description: {
    fontSize: 16,
    flex: 1,
    color: "#008080",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
