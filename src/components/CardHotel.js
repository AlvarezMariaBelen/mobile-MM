import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function CardHotel(props) {
  let { photo } = props
  let { name } = props
  let { id } = props
  const navigation = useNavigation();


  console.log(photo);
  return (
    <View>
      <Text style={styles.item}>{name}</Text>
      <Image
        style={styles.tinyLogo}
        source={{ uri: photo }}
      />
      <Button
        onPress={() => navigation.navigate("Details Hotel")}
        color='#004346'
        title='More information'
        type='submit'
      />
    </View>
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
