import React from "react";
import { View } from "react-native";
import { Button, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function MyProfile(props) {
  let user = useSelector((store) => store.user);
  const { photo, name, lastName, email } = useSelector((state) => state.user);
  console.log(user);

  return (
    <View style={styles.container}>
      <Image
        source={require("../src/images/perfill.png")}
        style={{ width: "100%", height: 400, marginBottom: 50 }}
      />
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Lastname: {lastName}</Text>
      <Text style={styles.text}>Email: {email} </Text>
      <Button title="Edit my profile" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "100%",
    padding: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 15,
  },
});
