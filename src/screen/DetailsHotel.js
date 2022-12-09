import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { useRef } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../api/url';

export default function DetailsHotel() {
  return (
    <ScrollView>
      <Text style={styles.item}>InterContinental Wellington</Text>
      <Image 
      style={styles.tinyLogo}
      source={{uri:'https://digital.ihg.com/is/image/ihg/intercontinental-wellington-6002915753-2x1'}}
      />
      <Text style={styles.item}>City: Wellington-Oceania </Text>
      <Text style={styles.item}>Capacity: 600</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    flex: 1,
    backgroundColor: '#74B3CE',
    color: 'black',
    padding: 20,
    marginVertical: 10,
    textDecoration: 'underline', 
    fontSize: 20,
    
  },
  title: {
    fontSize: 32,
    color: 'black'
  },
  tinyLogo: {
    height: 250,
    marginVertical: 10,
    marginHorizontal: 16,

  }
});

