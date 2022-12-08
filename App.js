import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./src/SignUp";
import Cities from "./src/Cities";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Itineraries from "./src/Itineraries";
import MyProfile from "./src/MyProfile";
import CityDetails from "./src/CityDetails";
import ReactionSlider from './src/components/ReactionSlider'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Itineraries></Itineraries>
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
