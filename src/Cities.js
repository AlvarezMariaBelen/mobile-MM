import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import CityCard from "./components/CityCard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Cities() {
  const dispatch = useDispatch();
  const { getCities, getCitiesFilter } = cityActions;
  const { cities, categories } = useSelector((store) => store.cities);
  let searchInput = useRef();

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, []);
  console.log(cities);
  console.log(categories);
  let filter = (event) => {
    console.log(event);
    let text = event.trim();
    dispatch(getCitiesFilter({ value: text }));
  };

  return (
    <ScrollView style={[styles.allCities, { flexDirection: "column" }]}>
      <TextInput
        style={styles.textInput}
        onChangeText={filter}
        ref={searchInput}
        placeholder="Find city..."
      />
      {categories.map((e) => (
        <BouncyCheckbox
          key={`${e}`}
          size={15}
          fillColor="#172A3A"
          unfillColor="#FFFFFF"
          text={`${e}`}
          iconStyle={{ borderColor: "#172A3A" }}
          innerIconStyle={{ borderWidth: 1 }}
          onPress={() => {}}
        />
      ))}
      {cities.length > 0 ? (
        cities.map((each) => (
          <CityCard
            key={each?._id}
            name={each?.name}
            continent={each?.continent}
            img={each?.photo}
            population={each?.population}
          />
        ))
      ) : (
        <>
          <Text style={styles.text}> No city found</Text>
          <Image
            style={styles.image}
            source={require("../src/images/notfound.png")}
          />
        </>
      )}
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
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 25,
  },
  image: {
    height: 350,
    width: 350,
  },
  text: {
    paddingTop: 40,
    paddingBottom: 40,
    fontSize: 30,
  },
});
