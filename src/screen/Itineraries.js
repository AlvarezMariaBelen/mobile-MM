import React from "react";
import { useEffect, useState } from "react";
import CardItinerary from "../components/CardItinerary";
import axios from "axios"
import { BASE_URL } from "../api/url";
import { View, ScrollView, StyleSheet, Button } from "react-native";


export default function Itineraries() {

  let [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/itineraries`)
    .then((res) => setActivities(res.data.response));
    
  }, []);

  return (

    < ScrollView style={[styles.allCities, { flexDirection: "column" }]}>
      {activities?.length >0 && 
      activities?.map((item) => (
        <CardItinerary
          key={item._id}
          id={item._id}
          name={item.name}
          photo={item.photo[0]}
          description={item.description}
          price={item.price} duration={item.duration}
        />
      ))}
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
      paddingTop: 60,
    },
    })