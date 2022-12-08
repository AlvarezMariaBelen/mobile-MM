import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

const ReactionSlider = () => {
  const [rating, setRating] = useState(3);
  const getRatingEmoji = () => {
    if (rating === 1) {
      return "👍";
    } else if (rating === 2) {
      return "😃";
    } else if (rating === 3) {
      return "👎";
    } else if (rating === 4) {
      return "🔥";
    } else if (rating === 5) {
      return "❤️";
    }
  };
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={setRating}
      ></Slider>
      <Text style={styles.emotext}>{getRatingEmoji()}</Text>
    </View>
  );
};
export default ReactionSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: 200,
    height: 40,
  },
  emotext: {
    fontSize: 25,
    marginBottom: 20,
    paddingBottom: 40
  },
});
