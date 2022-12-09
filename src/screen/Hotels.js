import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";
import { useRef } from "react";
import CardHotel from '../components/CardHotel';
import { useNavigation } from '@react-navigation/native';


export default function Hotels() {
  const dispatch = useDispatch();
  const { getHotels, getHotelsFilter, getHotelsSelect } = hotelActions;
  const { hotels } = useSelector((state) => state.hotels);
  const [valorInput,setValorInput] = useState ()
  const navigation = useNavigation(); 


  useEffect(() => {

    dispatch(getHotels());

  }, []);



  let filter = (event) => {
    let text = valorInput

    if (text) {
      dispatch(getHotelsFilter({ name: text }));
    } else {
      dispatch(getHotels());
    }
  };
  console.log(hotels);
  return (
    <ScrollView >

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 8,
          marginHorizontal: 16,
        }}
        placeholder='Search...'
        type='search'
        onChangeText={setValorInput}
        value={valorInput}
        onChange={filter}>
      </TextInput>
      {hotels.map(allhotels => <CardHotel key={allhotels._id} photo={allhotels?.photo[0]} name={allhotels?.name} id={allhotels._id} />)}
     <TouchableOpacity
        onPress={() => navigation.navigate("All Shows")}
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
          alignSelf:'center'
        }}
        >
          See all the shows
        </Text>
      </TouchableOpacity>
      </ScrollView>
  )
}

