import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SvgLocation from './icons/Location';
import SvgDotHorizontal from './icons/DotHorizontal';
import { categories } from '../data/category';
import { sliders } from '../data/slider';
import { restaurants } from '../data/restaurant';
import SvgStarReview from './icons/StarReview';
import SvgWatch from './icons/Watch';
import { useSelector } from 'react-redux';
import { StateType } from '../redux/store/vanueStore';
import SvgLocationMap from './icons/LocationMap';

const HomeComp = ({ navigation }: any) => {
  const [categoriesData, setCategories] = useState<any>([]);
  const [sliderData, setSliders] = useState<any>([]);

  useEffect(() => {
    setSliders(sliders);
    setCategories(categories);
  }, []);

  const { language } = useSelector((state: StateType) => state.languageData);

  const formatData = () => {
    try {
      const formattedData: any = [];
      categoriesData.forEach((category: any) => {
        const categoryRestaurants = restaurants.filter((restaurant: any) => restaurant.categoryId === category.id);
        formattedData.push({ category: language === 'İngilis' ? category.en : category.name, data: categoryRestaurants });
      });
      return formattedData;
    } catch (error) {
      console.log(error);
    }
  };

  const renderItems = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('NearbyScr', item)}>
        <View style={{ marginHorizontal: 10 }}>
          <Image style={{ width: 70, height: 70, borderRadius: 50 }} source={{ uri: item.icon }} />
          <Text style={{ textAlign: 'center', fontWeight: '300', color: '#262626', fontSize: 12, fontFamily: 'Poppins-Regular' }}>
            {language === 'İngilis' ? item.en : item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const sliderItem = ({ item }: any) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Image style={styles.sliderImage} source={{ uri: item.image }} />
      </View>
    );
  };

  const restaurantSlider = ({ item }: any) => {

    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DetailScr', item)}>
          <View style={{ marginTop: 10 }}>
            <Image style={styles.restoranImage} source={item.image} />
          </View>
          <View style={styles.cardTitle}>
            <View style={{ marginHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Medium' }}>
                {item.name.length < 10 ? item.name : item.name}
              </Text>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                <SvgStarReview style={{ marginTop: 2 }} />
                <Text style={{
                  color: 'black',
                  fontFamily: 'Poppins-light',
                }}>{item.star}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 4, alignItems: "center" }}>
             
                <Text>
                  {
                    item.address.length >= 10 ?
                      <Text>{item.address.substring(0, 12)} ...</Text>
                      :
                      <Text>{item.address}</Text>
                  }
                </Text>
              <View style={{ flexDirection: 'row', gap: 4,marginTop:4 }} >
                <SvgWatch style={{ marginTop: 2 }} />
                <Text style={{ fontSize: 13, fontFamily: 'Poppins-Regular' }}>{item.openDate} - {item.closeDate}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  // const categorySlider = ({ item }: any) => {
  //   return (
  //     <View style={{ marginTop: 10 }}>
  //       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
  //         <View>
  //           <Text style={{ fontSize: 18, color: 'black', fontFamily: 'Poppins-Medium' }}>
  //             {item.category}
  //           </Text>
  //         </View>
  //       </View>
  //       <FlatList
  //         data={item.data}
  //         horizontal
  //         renderItem={restaurantSlider}
  //         showsVerticalScrollIndicator={false}
  //         showsHorizontalScrollIndicator={false}
  //         ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
  //       />
  //     </View>
  //   );
  // };

  return (
    <ScrollView>
      <View style={styles.containerHeader}>
        <View style={styles.headerMain}>
          <SvgLocation />
          <TouchableOpacity>
            <Text>Baku, Azerbaijan</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('LanguageScr')}>
              {language === 'İngilis' ? (
                <Image
                  style={styles.flagImage}
                  source={{ uri: 'https://media.istockphoto.com/id/486407806/vector/union-jack.jpg?s=612x612&w=0&k=20&c=KPRndA_Czak9T0w_Eq3GnhRaNxERiEiw2cjZe5GBY-E=' }}
                />
              ) : (
                <Image
                  style={styles.flagImage}
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Azerbaijan_Democtratic_Republic.PNG?20101216233118' }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgDotHorizontal />
            </TouchableOpacity>
          </View>
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
      <View style={{ marginHorizontal: 15 }}>
        {formatData().map((item: any, index: any) => (
          <View key={index}>
            <Text style={{ fontSize: 18, color: 'black', fontFamily: 'Poppins-Medium', marginTop: 10 }}>{item.category}</Text>
            <FlatList
              data={item.data}
              horizontal
              renderItem={restaurantSlider}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeComp;

const styles = StyleSheet.create({
  cardTitle: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 220,

  },
  restoranImage: {
    width: 220,
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sliderImage: {
    width: 375,
    height: 180,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  flagImage: {
    width: 25,
    height: 17,
    borderRadius: 3,
  },
  settinStyle: {
    backgroundColor: '#E4E4E4',
    padding: 3,
    borderRadius: 50,
  },
  containerHeader: {
    marginHorizontal: 15,
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
