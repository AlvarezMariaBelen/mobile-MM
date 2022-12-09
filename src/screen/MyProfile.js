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
        source={require("../images/perfill.png")}
        style={{ width: "100%", height: 400, marginBottom: 50 }}
      />
      <Text style={styles.text}>Name: Maximiliano{name}</Text>
      <Text style={styles.text}>Lastname: Pereyra{lastName}</Text>
      <Text style={styles.text}>Email: maxi_pere@gmail.com {email} </Text>
      <Button title="Edit my profile" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    paddingTop: 70,
    backgroundColor: "#D2E7EF",
  },
  text: {
    marginBottom: 40,
    fontSize: 15,
  },
});
