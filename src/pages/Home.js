import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import New from "../components/New";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#FFF" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="O que está procurando ?"
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidade</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={require("../assets/house1.jpg")}
          name="Casa de Praia"
          descricao="Casa nova, uma quadra do mar, lugr seguro e monitorado 24horas"
          onPress={() => navigation.navigate("Detail")}
        />

        <New
          cover={require("../assets/house2.jpg")}
          name="Casa de Praia"
          descricao="Casa nova, uma quadra do mar, lugr seguro e monitorado 24horas"
          onPress={() => navigation.navigate("Detail")}
        />

        <New
          cover={require("../assets/house3.jpg")}
          name="Casa de Praia"
          descricao="Casa nova, uma quadra do mar, lugr seguro e monitorado 24horas"
          onPress={() => navigation.navigate("Detail")}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#FFF",
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "90%",
  },
  contentNew: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
