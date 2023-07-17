import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SvgSearch from '../components/icons/Search'
import { foodCategory } from '../data/foodCategories'
import { foods } from '../data/food'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import { StateType } from '../redux/store/vanueStore'

const DetailScreen = ({ route, navigation }: any) => {
  const [searchs, setSearch] = useState<any>({ categories: [], foods: [] });
  const item = route.params;
  const [restaurantFoods, setRestaurantFoods] = useState<any>({ categories: [], foods: [] });
  const { language } = useSelector((state: StateType) => state.languageData)
  useEffect(() => {
    const { categories, foods } = getRestaurantFoods(item.id);
    setRestaurantFoods({ categories, foods });
    setSearch({ categories, foods });
  }, []);

  const foodCateg = foodCategory.filter((c: any) => c.restaurantId == item.id);

  const search = (value: string) => {
    if (value === "") {
      setRestaurantFoods({ categories: searchs.categories, foods: searchs.foods });
    } else {
      const filteredFoods = searchs.foods.filter((food: any) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );

      const categoryIds = Array.from(new Set(filteredFoods.map((food: any) => food.foodCategoryId)));
      const filteredCategories = searchs.categories.filter((category: any) =>
        categoryIds.includes(category.id)
      );

      setRestaurantFoods({ categories: filteredCategories, foods: filteredFoods });
    }
  };


  const getRestaurantFoods = (restaurantId: any) => {
    const restaurantCategories = foodCategory.filter(category => category.restaurantId === restaurantId);
    const restaurantFoods = foods.filter(food => {
      const category: any = restaurantCategories.find(category => category.id === food.foodCategoryId);
      return category !== undefined;
    });

    return { categories: restaurantCategories, foods: restaurantFoods };
  };


  const renderCateg = ({ item }: any) => {
    const filteredFoods = restaurantFoods.foods.filter(
      (food: any) => food.foodCategoryId === item.id
    );

    if (filteredFoods.length === 0) {
      return null;
    }

    return (
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "black", fontSize: 23 }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderFood = ({ item }: any) => (
    <View style={{ gap: 10 }}>
      <View style={styles.mainFood}>
        <View>
          <Text style={styles.foodName}>{item.name}</Text>
          {
            item.description &&
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 13,color:"#8C8C8C" }}>{item.description}</Text>
          }
          <Text style={{ fontSize: 13, color: "red", fontFamily: "Poppins-Medium" }}>{item.price} ₼</Text>
        </View>
        <View>
          <Image style={styles.foodImg} source={item.image} />
        </View>
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#CECECE" }}></View>
    </View>
  );

  const FoodCategoryItem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={item.id}>
        <View style={styles.foodMain}>
          <Text style={styles.foodCategSty}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Image style={styles.imageView} source={item.image} />
          <AntDesign onPress={()=>navigation.navigate("MainTabsler")} name='left' style={styles.backIcon} size={25} color={"black"} />
          <Text style={styles.dateSty}>🕒 {item.openDate} - {item.closeDate}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.detailTitle}>
            <Text style={styles.textName}>{item.name}</Text>
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
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 13, color: "green", paddingLeft: 2 }}>
              {
                language=="İngilis"?
                <Text>Delivery</Text>
                :
                <Text>
                  Çatdırılma
                </Text>
              }
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("AboutScr", item)}>
              <Text style={{ color: "black", fontFamily: "Poppins-Bold" }}>
              {
                language=="İngilis"?
                <Text>More details</Text>
                :
                <Text>
                  Daha ətraflı
                </Text>
              }
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput placeholderTextColor={"black"} onChangeText={search} 
            placeholder=
            {
              language=="İngilis"?
                "Search"
                :
                "Axtar"
            } 
            style={styles.searchSty} />
            <SvgSearch style={styles.seacrhIcon} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 15, gap: 10 }}>
            <FlatList
              data={foodCateg.map(c => c.name)}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={FoodCategoryItem}
            />
          </View>
          <View style={{ marginHorizontal: 5, gap: 10 }}>
            {restaurantFoods.categories.map((category: any) => (
              <View key={category.id}>
                {renderCateg({ item: category })}
                {restaurantFoods.foods
                  .filter((food: any) => food.foodCategoryId === category.id)
                  .map((food: any) => (
                    <View key={food.id}>
                      {renderFood({ item: food })}
                    </View>
                  ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  foodImg: {
    width: 70,
    height: 60,
    borderRadius: 8
  },
  foodName: {
    fontSize: 16,
    color: "black",
    fontFamily: "Poppins-Regular"
  },
  mainFood: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  detailTitle: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  foodMain: {
    borderWidth: 1,
    borderColor: "black",
    padding: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  foodCategSty: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "black",
  },
  seacrhIcon: {
    position: "absolute",
    top: 9,
    left: 10
  },
  searchSty: {
    height: 37,
    width: "100%",
    backgroundColor: "#D8D8D8",
    borderRadius: 10,
    paddingLeft: 40,
    color: "black"
  },
  categName: {
    fontSize: 14,
    color: "black"
  },
  textName: {
    fontFamily: "Poppins-Medium",
    fontSize: 23,
    color: "black",
  },
  dateSty: {
    position: "absolute",
    bottom: 15,
    backgroundColor: "white",
    color: "black",
    fontFamily: "Poppins-Regular",
    padding: 3,
    paddingLeft: 13,
    paddingRight: 13,
    fontSize: 13,
    borderRadius: 15,
    textAlign: "center",
    left: 10

  },
  imageView: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  backIcon: {
    position: "absolute",
    left: 10,
    top: 10,
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#D4D4D4",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 4,
    paddingTop: 4
  },
  container: {
    marginHorizontal: 15
  }
})
