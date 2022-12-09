import { ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

export default function CityDetCard(props) {
    let {img,name,continent, population,fn} = props;

    return (
        <ScrollView style={[styles.cardCity, {flexDirection: 'column', padding: 5}]}>
            <Image source={{uri: img}} style={{ width: '100%', height: 380, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.continent}>{continent}</Text>
            <Text style={styles.population}>Population - {population}</Text>
            <Button title={`See all tineraries`}  onPress={fn}/>
        </ScrollView>
    )

}
    const styles = StyleSheet.create({
        
    })