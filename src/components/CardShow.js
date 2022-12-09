import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react'

export default function CardShow(props) {
  let { photo } = props
  let { name } = props
  let { description } = props
  let { price } = props
  let { id } = props
  console.log(photo);
  return (
    <ScrollView>
      <Text style={styles.item}>"{name}"</Text>
      <Image 
      style={styles.tinyLogo}
      source={{uri: photo}}/>
      <Text style={styles.description}>+{description}</Text>
      <Text style={styles.description}>Price: ${price}</Text>
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
    justifyContent: 'center',
    textAlign: 'center',
    
  },
  title: {
    fontSize: 32,
    color: 'black'
  },
  description: {
    flex: 1,
    backgroundColor: '#74B3CE',
    color: 'black',
    padding: 10,
    textDecoration: 'underline', 
    
  },
  tinyLogo: {
    height: 250,
    marginVertical: 10,
    marginHorizontal: 16,

  }
});
