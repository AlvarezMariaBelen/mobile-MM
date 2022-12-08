import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

function CardItinerary(props) {
  console.log(props);
  let { photo } = props;
  let { description } = props;
  let { duration } = props;
  let { price } = props;

  return (
    <ScrollView>
      <View>
        <Text>{description}</Text>
        <Image source={{ uri: photo }} style={{ width: "100%", height: 300 }} />
      </View>
      <View className="detailsdet">
        <Text>Duration: {duration} hs</Text>
        <Text>Price: {price} USD</Text>
      </View>
    </ScrollView>
  );
}
export default CardItinerary;
