import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useRef } from "react";

export default function SignUp() {


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, padding: 15}}>Sign Up</Text>
      <TextInput style={styles.inputs} placeholder="First Name" />
      <TextInput style={styles.inputs} placeholder="Last Name" />
      <TextInput style={styles.inputs} placeholder="Photo URL" />
      <TextInput style={styles.inputs} placeholder="Age" />
      <TextInput style={styles.inputs} placeholder="Email" />
      <TextInput style={styles.inputs} placeholder="Password" />
      <Button title="Send"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    height: '70%',
  },

  inputs: {
    width: '70%',
    height: '5%',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 15,
    fontSize: 18
  },
});
