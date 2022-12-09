import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { useRef } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../api/url';

export default function EditMyProfile() {
  const { idUser, role } = useSelector((state) => state.user);
  const nameInputElement = useRef();
  const lastNameInputElement = useRef()
  const photoInputElement = useRef();
  const emailInputElement = useRef();
  const ageInputElement = useRef();
  const passwordInputElement = useRef();
  let id = idUser

  let handleSubmit = async (event) => {

    event.preventDefault();
    const data = {
      name: nameInputElement.current.value,
      lastName: lastNameInputElement.current.value,
      photo: photoInputElement.current.value,
      email: emailInputElement.current.value,
      role: role,
      age: ageInputElement.current.value,
      password: passwordInputElement.current.value
    }

    console.log(data);
    try {
      let res = await axios.patch((`${BASE_URL}/auth/${id}`), data)
      console.log(res);

    } catch (error) {
      console.log(error.message);

    }

  }

  return (
    <ScrollView>
      <Text style={styles.item}>New User's information</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,

        }}
        type="text"
        name='name'
        autoComplete='off'
        placeholder='Name'
        ref={nameInputElement}>
      </TextInput>

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,
        }}
        type="text"
        name='last-name'
        autoComplete='off'
        placeholder='Last Name'
        ref={lastNameInputElement}>
      </TextInput>

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,
        }}
        type="text"
        name='age'
        autoComplete='off'
        placeholder='Enter age'
        ref={ageInputElement}>
      </TextInput>

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,
        }}
        type="text"
        name='photo'
        autoComplete='off'
        placeholder='URL photo'
        ref={photoInputElement}>
      </TextInput>

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,
        }}
        type="text"
        name='email'
        autoComplete='off'
        placeholder='Enter email'
        ref={emailInputElement}>
      </TextInput>

      <TextInput
        style={{
          height: 40,
          borderColor: '#172A3A',
          borderWidth: 1,
          marginVertical: 15,
          marginHorizontal: 16,
        }}
        type="text"
        name='password'
        autoComplete='off'
        placeholder='Enter new password'
        ref={passwordInputElement}>
      </TextInput>
      <View
      style={{
        
        marginTop:35
      }}
      >
        <Button type='submit' color='#004346' onPress={handleSubmit} title='Send data' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "100%",
    padding: 20,
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
