import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux/store/vanueStore'
import { languages } from '../data/languages'
import { changeLanguage } from '../redux/slice/languageSlice'

const LanguageScreen = ({ navigation }: any) => {

    const { language } = useSelector((state: StateType) => state.languageData)
    const dispatch = useDispatch<AppDispatch>()

    const renderItems = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => dispatch(changeLanguage(item.default))}>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <Image style={styles.flagSty} source={{ uri: item.image }} />
                    <Text style={{ fontSize: 16, fontFamily: "Poppins-Regular", color: "black" }}>
                        {
                            language == "İngilis" ?
                                item.en
                                :
                                item.default
                        }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ marginHorizontal: 5 }}>
            
            <View style={styles.mainSty}>
            <AntDesign onPress={()=>navigation.navigate("MainTabsler")} name='left' style={styles.backIcon} size={20} color={"black"} />
                <Text style={styles.titleSty}>
                    {
                        language == "İngilis" ?
                            <Text>Select language</Text>
                            :
                            <Text>Tətbiq dilini seçin</Text>
                    }
                </Text>
            </View>
            <View style={{ marginHorizontal: 5 }}>
                <FlatList
                    data={languages}
                    renderItem={renderItems}
                />
            </View>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({
    backIcon: {
        borderRadius: 50,
        backgroundColor: "#D4D4D4",
        padding:5
      },
    flagSty: {
        width: 55,
        height: 35,
        borderRadius: 5
    },
    titleSty: {
        fontSize: 20,
        color: "black",
        fontFamily: "Poppins-SemiBold"
    },
    mainSty: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 10
    },
    iconView: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#D4D4D4",
        justifyContent: "center",
        alignItems: "center"
    }
})