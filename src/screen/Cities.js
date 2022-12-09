import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CityCard from "../components/CityCard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import { Button } from "react-native";

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
            source={require("../images/notfound.png")}
          />
        </>
      )}
      <TouchableOpacity
        style={{
          height:40,
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
          See all Itineraries
        </Text>
      </TouchableOpacity>
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
