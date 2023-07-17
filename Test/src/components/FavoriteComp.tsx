import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import SvgStarReview from '../components/icons/StarReview';
import SvgHeart from './icons/Heart';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux/store/vanueStore';
import { addToFavorite } from '../redux/slice/vanueSlice';


const FavoriteCamp = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>()
  const { favorites } = useSelector((state: StateType) => state.vanueData)
  const { language } = useSelector((state: StateType) => state.languageData)

  const keyExtractor = (item: any) => item.id.toString();

  const renderItems = ({ item }: any) => {
    return (
      <View>
        {favorites.length > 0 && (
          <View style={{ marginTop: 3 }}>
            <TouchableOpacity onPress={() => navigation.navigate("DetailScr", item)}>
              <View style={{ marginTop: 10 }}>
                <Image style={styles.imageSty} source={item.image} />
              </View>
              <View style={{ borderBottomEndRadius: 10, borderBottomLeftRadius: 10, borderWidth: 1, borderColor: "#D2D2D2" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                  <Text style={{ fontFamily: "Poppins-Medium", marginTop: 3, fontSize: 22, color: "black" }}>{item.name}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
                    <View style={{ backgroundColor: "green", width: 10, height: 10, borderRadius: 50 }}></View>
                    <Text style={{ fontFamily: "Poppins-Regular", marginTop: 3, fontSize: 14, color: "black" }}>
                    {
                   language=="İngilis"?
                   <Text>Open</Text>
                   :
                   <Text>
                     Açıqdır
                   </Text>
                }
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                  <View>
                    <Text style={{ fontFamily: "Poppins-Regular", marginTop: 3, fontSize: 14, color: "black" }}>{item.address}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                    <SvgStarReview />
                    <Text style={{color:"black"}}>{item.star}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{
              position: "absolute",
              top: 15,
              right: 5,
              backgroundColor: "#E8E8E8",
              padding: 7,
              borderRadius: 20,
            }}>
              <TouchableOpacity onPress={() => dispatch(addToFavorite(item))}>
                <SvgHeart style={{
                  width: 25,
                  height: 25,
                  fill: favorites.find((c: any) => c.id == item.id) ? "red" : "none",
                  stroke: favorites.find((c: any) => c.id == item.id) ? "red" : "black"
                }} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/image/Food/wis.png')}
          />
          <Text style={styles.emptyText}>
            {
              language!="İngilis"?
              <Text>
                Heç bir məkan yoxdur
              </Text>
              :
              <Text>
                There are no venues
              </Text>
            }
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("homeSc")}>
            <View style={{ backgroundColor: "black", padding: 10, borderRadius: 7 }}>
              <Text style={{ fontSize: 14, color: "white" }}>
                
                {
                   language!="İngilis"?
                   <Text>
                     Əsas səhifə
                   </Text>
                   :
                   <Text>
                     Home page
                   </Text>
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default FavoriteCamp

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250
  },
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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontFamily: "Poppins-Regular",
    fontSize: 22,
    color: "black",
    marginTop: 10
  },
})
