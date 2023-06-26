import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgSearchLocationIcon1 from '../icons/SearchLocationIcon (1)'
import SvgLocation from '../icons/Location'
import SvgDotHorizontal from '../icons/DotHorizontal'
import { categories } from '../data/category'
import { sliders } from '../data/slider'
import { restaurants } from '../data/restaurant'
import SvgStarReview from '../icons/StarReview'
import SvgLocationMap from '../icons/LocationMap'
import SvgWatch from '../icons/Watch'

const HomeComp = ({ navigation }: any) => {
  const [categoriesData, setcategories] = useState<any>([])
  const [sliderData, setsliders] = useState<any>([])

  useEffect(() => {
    setsliders(sliders)
    setcategories(categories)
  }, [])

  const formatData = () => {
    try {
      const formattedData: any = [];
      categoriesData.forEach((category: any) => {
        const categoryRestaurants = restaurants.filter((restaurant: any) => restaurant.categoryId === category.id);
        formattedData.push({ category: category.name, data: categoryRestaurants });
      });

      return formattedData;
    } catch (error) {
      console.log(error)
    }
  };

  const renderItems = ({ item }: any) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Image style={{ width: 70, height: 70, borderRadius: 50 }} source={{ uri: item.icon }} />
        <Text style={{ textAlign: "center", fontWeight: "300", color: "#262626", fontSize: 13 }}>{item.name}</Text>
      </View>
    )
  }

  const sliderItem = ({ item }: any) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Image style={styles.sliderImage} source={{ uri: item.image }} />
      </View>
    )
  }

  const categorySlider = ({ item }: any) => {
    return (
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 18, color: "black", fontFamily: "Poppins-Medium" }}>{item.category}</Text>
          </View>
          <View style={{ backgroundColor: "#FF3C3C", width: 55, padding: 2, borderRadius: 6 }}>
            <Text style={{ fontSize: 12, textAlign: "center", color: "white", fontFamily: "Poppins-Regular" }}>Hamısı</Text>
          </View>
        </View>
        <FlatList
          data={item.data}
          horizontal
          renderItem={restaurantSlider}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}

        />
      </View>
    )
  }

  const restaurantSlider = ({ item }: any) => {
    return <>
      {
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("DetailScr", item)}>
            <View style={{ marginTop: 10 }}>
              <Image style={styles.restoranImage} source={{ uri: item.image }} />
            </View>
            <View style={styles.cardTitle}>
              <View style={{ marginHorizontal: 4, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, color: "black", fontFamily: "Poppins-Medium" }}>
                  {
                    item.name.length < 10 ? item.name : item.name
                  }
                </Text>
                <View style={{ flexDirection: "row", gap: 4 }}>
                  <SvgStarReview style={{ marginTop: 2 }} />
                  <Text style={{
                    color: "black",
                    fontFamily: "Poppins-light"
                  }}>{item.star}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 4 }}>
                <View style={{ flexDirection: "row", gap: 4 }} >
                  <SvgWatch style={{ marginTop: 2 }} />
                  <Text style={{ fontSize: 13, fontFamily: "Poppins-Regular" }}>{item.openDate} - {item.closeDate}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <SvgLocationMap style={{ marginTop: 2 }} />
                  <Text style={{ fontSize: 13, fontFamily: "Poppins-Regular" }}>7.50 km</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
    </>
  }

  return (
    <ScrollView >
      <View style={styles.containerHeader}>
        <View style={styles.headerMain}>
          <SvgLocation />
          <TouchableOpacity>
            <Text>Cari məkanınız</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("LanguageScr")}>
            <Image
              style={styles.flagImage}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Azerbaijan_Democtratic_Republic.PNG?20101216233118',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={categoriesData}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={sliderData}
          renderItem={sliderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled

        />
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <FlatList
          data={formatData()}
          keyExtractor={(item, index) => item.category + index}
          renderItem={categorySlider}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}

export default HomeComp

const styles = StyleSheet.create({
  cardTitle: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 220,
    height: 50
  },
  restoranImage: {
    width: 220,
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  sliderImage: {
    width: 375,
    height: 180,
    borderRadius: 15,
    resizeMode: "cover"
  },
  flagImage: {
    width: 25,
    height: 17,
    borderRadius: 3
  },
  settinStyle: {
    backgroundColor: "#E4E4E4",
    padding: 3,
    borderRadius: 50
  },
  containerHeader: {
    marginHorizontal: 15,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  }
})