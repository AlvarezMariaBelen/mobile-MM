import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./src/SignUp";
import Cities from "./src/Cities";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Itineraries from "./src/Itineraries";
import MyProfile from "./src/MyProfile";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MyProfile></MyProfile>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
