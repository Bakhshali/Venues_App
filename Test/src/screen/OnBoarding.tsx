import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const OnBoarding = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
   
      <View style={{ marginTop: 100, flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 28, fontFamily: "Poppins-Medium", color: "red" }}>Welcome to VenueAz</Text>
        <Text style={{ textAlign: "center", color: "black", fontFamily: "Poppins-Regular", fontSize: 16 }}>Bir birindən fərqli məkanlar</Text>
      </View>
      <View style={{ marginHorizontal: 5, flex: 8 }}>
        <Image style={styles.image} source={require("../assets/image/OnboardingGif/w.gif")} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("MainTabsler")}>
          <View style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontFamily: "Poppins-Medium" }}>Kəşf et</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  }
})