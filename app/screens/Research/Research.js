import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading";
import ResearchList from "../../components/Research/ResearchList";
import { Url } from "../../utils/global";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Research() {
  const [researchList, setResearchList] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlGlobal = Url;
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("userData").then((res) => {
      setLoading(true);
      var json = JSON.parse(res);
      var token = json.access_token;
      if (token) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(urlGlobal + "/api/investigacion/list/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
            if (result.message) {
              console.log("kkk");
              setResearchList(result.data);
            } else {
              Alert.alert("No hay datos");
            }
          })
          .catch((error) => {
            setLoading(false);
            navigation.navigate("home");
          });
      } else {
        setLoading(false);
      }
    });
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ResearchList researchList={researchList} />
        <Loading isVisible={loading} text="Cargando.." />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    paddingTop: 20,
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },

  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
});
