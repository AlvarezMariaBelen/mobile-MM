import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity
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
      <TouchableOpacity
        style={{
          height:30,
          backgroundColor: '#09BC8A',
          marginVertical: 8,
          marginHorizontal: 16,
        }}
      >
        <Text
        style={{
          flex: 1,
          fontSize: 16,
          alignSelf:'center',
        }}
        >
          Details
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardCity: {
    marginTop: 15,
    backgroundColor: "#1D3549",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
  },

  font: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 20,
  },
});
