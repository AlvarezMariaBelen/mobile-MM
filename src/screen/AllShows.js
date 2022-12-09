import React from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View } from 'react-native';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from '../redux/actions/showAction';
import CardShow from '../components/CardShow';

export default function MyShows() {
    const dispatch = useDispatch();
    const { getShow } = showActions;
    const { shows } = useSelector((state) => state.shows);

    useEffect(() => {
        dispatch(getShow(),);
    }, []);

    console.log(shows);
    return (
        <ScrollView>
           {shows.map(allshows => <CardShow key={allshows._id} photo={allshows?.photo[0]} name={allshows?.name} id={allshows._id} price={allshows.price} description={allshows.description}/>)}
        </ScrollView>
    )
}
