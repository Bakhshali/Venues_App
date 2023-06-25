import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeComp from '../../components/HomeComp';
import LocationComp from '../../components/LocationComp';
import ProfileComp from '../../components/ProfileComp';
import DetailScreen from '../../screen/DetailScreen';
import MenuScreen from '../../screen/MenuScreen';
import NearbyScreen from '../../screen/NearbyScreen';
import SvgHome from '../../icons/Home';
import SvgProfile from '../../icons/Profile';
import SvgSearchLocationIcon1 from '../../icons/SearchLocationIcon (1)';
import SvgSearch from '../../icons/Search';
import LanguageScreen from '../../screen/LanguageScreen';
import AboutScreen from '../../screen/AboutScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainTab = () => {

    const BaseTab = () => {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 35,
                    borderTopRightRadius: 35
                }
            }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgHome style={{
                            stroke: focused ? "red" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={HomeComp} name="homeSc" />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgSearchLocationIcon1 style={{
                            stroke: focused ? "red" : "black",
                            fill: focused ? "red" : "gray"
                        }} />
                    )
                }} component={LocationComp} name="locationSc" />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgProfile style={{
                            stroke: focused ? "red" : "gray",
                            fill: focused ? "none" : "none"
                        }} />
                    )
                }} component={ProfileComp} name="profileSc" />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={BaseTab} name="MainTabsler" />
            <Stack.Screen component={DetailScreen} name="DetailScr" />
            <Stack.Screen component={MenuScreen} name="MenuScr" />
            <Stack.Screen component={NearbyScreen} name="NearbyScr" />
            <Stack.Screen component={LanguageScreen} name="LanguageScr" />
            <Stack.Screen component={AboutScreen} name="AboutScr" />
        </Stack.Navigator>
    )
}

export default MainTab

const styles = StyleSheet.create({})