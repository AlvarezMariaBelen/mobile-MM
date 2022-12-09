import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hotels from "../screen/Hotels";
import SingIn from "../screen/SingIn"
import AllShows from "../screen/AllShows";
import EditMyProfile from "../screen/EditMyProfile";
import Home from "../screen/Home";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import DetailsHotel from "../screen/DetailsHotel";
import Cities from "../screen/Cities";
import { MaterialIcons } from '@expo/vector-icons';
import MyProfile from "../screen/MyProfile";
import Itineraries from "../screen/Itineraries";
import CityDetails from "../screen/CityDetails"



const HotelStackNavigator = createStackNavigator();

function MyStack() {
    return (
        <HotelStackNavigator.Navigator
            initialRouteName="Hotels"
        >
            <HotelStackNavigator.Screen
                name='Found your hotel'
                component={Hotels}
            />
            <HotelStackNavigator.Screen
                name="All Shows"
                component={AllShows}
            />
            <HotelStackNavigator.Screen
                name="Inicio"
                component={Home}
            />
            <HotelStackNavigator.Screen
                name="Details Hotel"
                component={DetailsHotel}
            />
        </HotelStackNavigator.Navigator>
    )
}


const ProfileStackNavigator = createStackNavigator();

function MyStack2() {
    return (
        <ProfileStackNavigator.Navigator
            initialRouteName="My Profile"
        >
            <ProfileStackNavigator.Screen
                name='Personal Information'
                component={MyProfile}
            />
            <ProfileStackNavigator.Screen
                name="Edit My Profile"
                component={EditMyProfile}
            />
        </ProfileStackNavigator.Navigator>
    )
}

const CityStackNavigator = createStackNavigator();

function MyStack3() {
    return (
        <CityStackNavigator.Navigator
            initialRouteName="Cities"
        >
            <CityStackNavigator.Screen
                name='Found your hotel'
                component={Cities}
            />
            <CityStackNavigator.Screen
                name="Itineraries"
                component={Itineraries}
            />
            <CityStackNavigator.Screen
                name="City Details"
                component={CityDetails}
            />
        </CityStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#629EB0',
            }}
        >
            <Tab.Screen name="Sing In" component={SingIn}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="infocirlceo" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Cities" component={MyStack3}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="location-city" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Hotels" component={MyStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="hotel-alt" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="My Profile" component={MyStack2}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="idcard" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
