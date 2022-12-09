import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import ReactionSlider from "../components/ReactionSlider";

export default function CityDetails() {
  return (
    <ScrollView style={[styles.allCities, { flexDirection: "column" }]}>
     <Text style={styles.textTi}>Paris</Text>
      <View style={styles.container}>
        <Image
          source={require("../images/98404.jpg")}
          style={{ width: "100%", height: 300, marginBottom: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        ></Image>
        <Text style={styles.text}>Continent: Europe</Text>
        <Text style={styles.text}>Population: 2000000</Text>
      </View>
      <Text
        style={{ height: 50, marginBottom: 10, fontSize: 20, marginTop: 40 }}
      >
        Available Itineraries:
      </Text>
      <Text style={styles.textTi}>
          Eiffel Tower Tour With Small Group, With Summit Access by Elevator
        </Text>
      <View style={styles.container}>
        <Image
          source={require("../images/eiffel.jpg")}

          style={{ width: "100%", height: 300, marginBottom: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}

        ></Image>
        <Text style={styles.text}>Duration: 2hs</Text>
        <Text style={styles.text}>Price: 45 USD</Text>
        <ReactionSlider></ReactionSlider>
      </View>
      <Text style={styles.textTi}>Louvre Museum with priority access</Text>
      <View style={styles.container}>
        
        <Image
          source={require("../images/212470.jpg")}
          style={{ width: "100%", height: 300, marginBottom: 50, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        ></Image>
        <Text style={styles.text}>Duration: 2hs</Text>
        <Text style={styles.text}>Price: 75 USD</Text>
        <ReactionSlider></ReactionSlider>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  allCities: {
    flex: 1,
    padding: 20,
    backgroundColor: "#BDD7DB",
    height: "80%",
    width: "100%",
    paddingTop: 10,
  },
  text: {
    paddingBottom: 15,
    fontSize: 15,
    textAlign: 'center'
  },
  container: {
    marginBottom: 20,
    backgroundColor: '#57969E',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  textTi: {
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: 'center'
  },
});
