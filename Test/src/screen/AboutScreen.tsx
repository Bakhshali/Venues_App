import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import SvgStarReview from '../components/icons/StarReview';
import moment from 'moment';
import { StateType } from '../redux/store/vanueStore';
import { useSelector } from 'react-redux';


const AboutScreen = ({ route }: any) => {
    const items = route.params
    const currentDate = moment().format('dddd');
    const { language } = useSelector((state: StateType) => state.languageData)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <MapView style={{ width: "100%", height: 200 }}
                    initialRegion={{
                        latitude: items.lat,
                        longitude: items.long,
                        latitudeDelta: 0.050,
                        longitudeDelta: 0.080,
                    }}>

                    <Marker
                        coordinate={{
                            latitude: items.lat,
                            longitude: items.long
                        }}
                        title="Marker Title"
                        description="Marker Description"
                    />
                </MapView>
            </View>
            <View style={{ marginHorizontal: 20, flex: 4 }}>
                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold", color: "black" }}>{items.name}</Text>

                    </View>
                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Text style={{ color: "black", fontSize: 16, marginTop: 5, fontFamily: "Poppins-Medium" }}>{items.star}</Text>
                        <SvgStarReview />
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: "green", marginBottom: 3, marginLeft: 1 }}></View>
                    <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>{currentDate}: All day</Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", color: "black" }}>Location</Text>
                        <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>{items.address}</Text>
                        <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>Baku</Text>
                    </View>
                    <View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", color: "black" }}>Opening Hours</Text>
                        <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>Monday - Saturday {items.openDate} - {items.closeDate}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", color: "black" }}>Delivery Information </Text>
                    <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>Delivery Cost: ₼1,50</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", color: "black" }}>Contact</Text>
                    <Text style={{ color: "gray", fontSize: 14, fontFamily: "Poppins-Regular" }}>If you have allergies or other dietary restriction,please contact the restaurant.The restaurant will provide food-specific information upon request.</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontFamily: "Poppins-Medium", color: "black" }}>Mobile</Text>
                        <Text style={{ fontSize: 14, color: "#0360FF", fontFamily: "Poppins-Medium" }}>070 304 40 90</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                    const latLng = `${items.lat},${items.long}`;
                    const label = items.name;
                    const url: any = Platform.select({
                        ios: `${scheme}${latLng}?q=${label}`,
                        android: `${scheme}${latLng}?q=${label}&z=16`,
                    });

                    Linking.openURL(url);
                }}>
                    <View style={{ backgroundColor: "blue", marginHorizontal: 20, marginTop: 20, borderRadius: 8, padding: 17 }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 17, fontFamily: "Poppins-Medium" }}>
                            {
                                language != "İngilis" ?
                                    <Text>
                                        Xəritəyə bax
                                    </Text>
                                    :
                                    <Text>
                                        Show map
                                    </Text>
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})