import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { restaurants } from '../data/restaurant';
import SvgSearch from '../icons/Search';

const NearbyScreen = ({ route, navigation }: any) => {
  const item = route.params;
  const palaces = restaurants.filter(c => c.categoryId == item.id)

  const keyExtractor = (item: any) => item.id.toString();


  const renderItems = ({ item }: any) => {
    return (
      <View style={{ marginTop: 3 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DetailScr", item)}>
          <View style={{ marginTop: 10 }}>
            <Image style={styles.imageSty} source={{ uri: item.image }} />
          </View>
          <View style={{ marginTop: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontFamily: "Poppins-Medium", marginTop: 3, fontSize: 22, color: "black" }}>{item.name}</Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: "black" }}>📍 7.5 km</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              <View>
                <Text style={{ fontFamily: "Poppins-Regular", marginTop: 3, fontSize: 14, color: "black" }}>{item.address}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
                <View style={{ backgroundColor: "green", width: 10, height: 10, borderRadius: 50 }}></View>
                <Text style={{ fontFamily: "Poppins-Regular", marginTop: 3, fontSize: 14, color: "black" }}>Açıqdır</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 15, paddingBottom: 10,marginHorizontal:10 }}>
        <TextInput style={styles.inputSty} placeholder={"Məkanlar"} />
        <SvgSearch style={styles.iconSearch} />
      </View>
      <FlatList
        data={palaces}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  )
}

export default NearbyScreen

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
  },
  iconSearch: {
    position: "absolute",
    top: 11,
    left: 10
  },
  imageSty: {
    width: "100%",
    height: 210,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  inputSty: {
    backgroundColor: "#DEDEDE",
    paddingLeft: 35,
    borderRadius: 15,
    color: "black",
    height: 40,
    fontSize: 15,
  }
})
