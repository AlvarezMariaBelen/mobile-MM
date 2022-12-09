import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, Button } from 'react-native';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);
  const { getHotels } = hotelActions;
  const navigation = useNavigation();

  useEffect(() => {

    dispatch(getHotels());

  }, []);


  return (
    <ScrollView
      style={{
        backgroundColor: '#508991',
      }}
    >
      <View
        style={{
          flex: 1,
          height: 400,
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          style={{

            justifyContent: 'center',
            textAlign: 'center',
            height: 250,
            marginVertical: 10,
            marginHorizontal: 16,
          }}
          source={require("../imagenes/Logotipo.gif")}
        />
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            backgroundColor: '#74B3CE',
            color: 'black',
            padding: 20,
            marginVertical: 10,
            textDecoration: 'underline',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          'Cities'
        </Text>
        <Image
          style={{

            justifyContent: 'center',
            textAlign: 'center',
            height: 250,
            marginVertical: 10,
            marginHorizontal: 16,
          }}
          source={{ uri: 'https://www.npo3.nl/uploads/media_item/media_item/436/81/5f828a8e-21e3-4d24-96a4-1c551c747fce_widescreen_large-1605104668.jpg' }}
        />
        <Image
          style={{

            justifyContent: 'center',
            textAlign: 'center',
            height: 250,
            marginVertical: 10,
            marginHorizontal: 16,
          }}
          source={{ uri: 'https://viajerosocultos.com/wp-content/uploads/2021/09/the-famous-blue-city-of-chefchaouen-top-view.jpg' }}
        />
        <Text
          style={{
            flex: 1,
            backgroundColor: '#74B3CE',
            color: 'black',
            padding: 20,
            marginVertical: 10,
            textDecoration: 'underline',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          'Hotels'
        </Text>
        <Image
          style={{

            justifyContent: 'center',
            textAlign: 'center',
            height: 250,
            marginVertical: 10,
            marginHorizontal: 16,
          }}
          source={{ uri: "https://www.novotelparis.com/photos-2/ourhotel-1.jpg" }}
        />
        <Image
          style={{

            justifyContent: 'center',
            textAlign: 'center',
            height: 250,
            marginVertical: 10,
            marginHorizontal: 16,
          }}
          source={{ uri: "https://pix10.agoda.net/hotelImages/506/50697/50697_16082319240045742113.jpg?ca=6&ce=1&s=1024x768" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#74B3CE',
          color: 'black',
          paddingTop: 20,
          paddingBottom: 20,
          marginVertical: 10,
          textDecoration: 'underline',
          fontSize: 20,
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Text
          style={{
            flex: 1,
            backgroundColor: '#74B3CE',
            color: 'black',
            paddingTop: 5,
            paddingBottom: 5,
            marginVertical: 10,
            textDecoration: 'underline',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Timetable:
          Monday to Saturday
          09:00hs to 21:00hs
        </Text>
        <Text
          style={{
            flex: 1,
            backgroundColor: '#74B3CE',
            color: 'black',
            paddingTop: 5,
            paddingBottom: 5,
            marginVertical: 10,
            textDecoration: 'underline',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Tel: 352-201-2877
        </Text>
        <Text
          style={{
            flex: 1,
            backgroundColor: '#74B3CE',
            color: 'black',
            paddingTop: 5,
            paddingBottom: 5,
            marginVertical: 10,
            textDecoration: 'underline',
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          Mail:tourismMM@gmail.com
        </Text>
        <Button
          onPress={() => navigation.navigate("Hotels")}
          color='#004346'
          title='Go to cities'
          type='submit'
        />
        <Text style={{
          flex: 1,
          backgroundColor: '#74B3CE',
          color: 'black',
          paddingTop: 5,
          paddingBottom: 5,
          marginVertical: 10,
          textDecoration: 'underline',
          fontSize: 20,
          justifyContent: 'center',
          textAlign: 'center',
        }}
        >
          ó
        </Text>
        <Button
          onPress={() => navigation.navigate("Hotels")}
          color='#004346'
          title='Go to hotels'
          type='submit'
        />
      </View>
    </ScrollView>
  )
}
