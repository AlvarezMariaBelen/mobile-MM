import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/userActions';
import { useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SingIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  let dispatch = useDispatch()
  const navigation = useNavigation(); 

  
  async function iniciarSesion(event) {
    event.preventDefault();
    let datos = {
      email,
      password
    };
    
    AsyncStorage.setItem('datos', JSON.stringify(datos))
    .catch(err => console.log(err))
  }

  useEffect(()=>{

    AsyncStorage.getItem('datos')
    .then(data => console.log(data))
    .catch(err => console.log(err))

  },[]);

  return (
    <ScrollView>
    <View>
      <Text style={styles.titulo} >Wellcome</Text>
        <TextInput 
        style={styles.item}
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
        />
        <TextInput 
        style={styles.item}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        />
        <Button 

        onPress={() => navigation.navigate("My Profile") && iniciarSesion}

        color='#004346'
        title='Send' 
        type='submit' 
        />
    </View>
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
    backgroundColor: '#95D7F3',
    color: 'white',
    padding: 20,
    marginVertical: 4,
    textDecoration: 'underline', 
    
  },
  titulo: {
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
  
});