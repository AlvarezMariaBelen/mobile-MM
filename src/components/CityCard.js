import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
} from "react-native";
import React from "react";

export default function CityCard(props) {
  let { img, name, continent, population, id } = props;

  return (
    <ScrollView
      style={[styles.cardCity, { flexDirection: "column", padding: 5 }]}
    >
      <Image source={{ uri: img }} style={{ width: "100%", height: 300 }} />
      <Text style={styles.font}>{name}</Text>
      <Text style={styles.font}>{continent}</Text>
      <Text style={styles.font}>Population: {population}</Text>
      <Button
        title="Details"
        accessibilityLabel="More Details"
        color={"#7CA7CB"}
        onPress={() => Alert.alert("Pressed")}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardCity: {
    marginTop: 20,
    backgroundColor: "#1D3549",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
  },

  font: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 20,
  },
});
