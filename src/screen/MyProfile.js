import React from "react";
import { View } from "react-native";
import { Button, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

export default function MyProfile(props) {
  let user = useSelector((store) => store.user);
  const { photo, name, lastName, email } = useSelector((state) => state.user);
  console.log(user);
  const navigation = useNavigation();


  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require("../images/perfill.png")}
        style={{ width: "100%", height: 400, marginBottom: 50 }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{lastName}</Text>
      <Text style={styles.text}>{email} </Text>
      <Button title="Edit my profile" color='#004346' onPress={() => navigation.navigate("Edit My Profile") }/>
    </View>
    </ScrollView>
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
