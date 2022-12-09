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
import CityDetails from '../screen/CityDetails'



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
            <HotelStackNavigator.Screen
                name="CityDetails"
                component={CityDetails}
            />
        </HotelStackNavigator.Navigator>
    )
}


const SingInStackNavigator = createStackNavigator();

function MyStack2() {
    return (
        <SingInStackNavigator.Navigator
            initialRouteName="Sing In"
        >
            <SingInStackNavigator.Screen
                name='Sing-In'
                component={SingIn}
            />
            <SingInStackNavigator.Screen
                name="Home"
                component={Home}
            />
        </SingInStackNavigator.Navigator>
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
            <Tab.Screen name="Wellcome" component={SingIn}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="infocirlceo" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Cities" component={Cities}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="infocirlceo" size={24} color="black" />
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
            <Tab.Screen name="Edit My Profile" component={EditMyProfile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="idcard" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
