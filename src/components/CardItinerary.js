import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import ReactionSlider from "./ReactionSlider";

function CardItinerary(props) {
  console.log(props);
  let { photo } = props;
  let { description } = props;
  let { duration } = props;
  let { price } = props;

  return (
    <ScrollView style={[styles.allCities, { flexDirection: "column" }]}>
      <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <Image source={{ uri: photo }} style={{ width: "100%", height: 300, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.info}>Duration: {duration} hs</Text>
        <Text style={styles.info}>Price: {price} USD</Text>
      </View>
    </ScrollView>
  );
}
export default CardItinerary;

const styles = StyleSheet.create({
  allCities: {
    flex: 1,
    padding: 10,
    backgroundColor: "#BDD7DB",
    height: "80%",
    width: "100%",
    paddingTop: 10,
  },
  container: {
    backgroundColor: '#57969E',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  description: {
    fontSize: 18,
    textAlign: 'center'
  },
  info: {
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  container2: {
    marginBottom: 40
  }
  })
