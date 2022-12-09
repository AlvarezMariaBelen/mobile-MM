import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';

export default function CardDetailsHotel(props) {
  let { name } = props  
  let { photo } = props
  let { capacity } = props  
  let { city } = props  

  return (
    <View>
      <Text style={styles.item}>{name}</Text>
      <Image 
      style={styles.tinyLogo}
      source={{uri: photo}}/>
      <Text style={styles.item}>{capacity}</Text>
    </View>
  )
}

