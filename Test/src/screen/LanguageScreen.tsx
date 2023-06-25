import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SvgLeftBack from '../icons/LeftBack'

const LanguageScreen = ({ navigation }: any) => {
    return (
        <View style={{ marginHorizontal: 5 }}>
            <View style={styles.mainSty}>
                <TouchableOpacity onPress={() => navigation.navigate("MainTabsler")}>
                    <View style={styles.iconView}>
                        <SvgLeftBack />
                    </View>
                </TouchableOpacity>
                <Text style={styles.titleSty}>Tətbiq dilini seçin</Text>
            </View>
            <View style={{  marginHorizontal: 5}}>
                <View style={{marginTop: 20,flexDirection:"row",alignItems:"center",gap:15}}>
                    <Image style={styles.flagSty} source={{ uri: "https://media.istockphoto.com/id/486407806/vector/union-jack.jpg?s=612x612&w=0&k=20&c=KPRndA_Czak9T0w_Eq3GnhRaNxERiEiw2cjZe5GBY-E=" }} />
                    <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"black"}}>İngilis</Text>
                </View>
                <View style={{marginTop: 20,flexDirection:"row",alignItems:"center",gap:15}}>
                    <Image style={styles.flagSty} source={{ uri: "https://media.istockphoto.com/id/1323578098/vector/flags-of-the-world.jpg?s=612x612&w=0&k=20&c=k6oaNtJch05UlaSNlLj0Vw2kzGOQLwXe82CEQLb0DZA=" }} />
                    <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"black"}}>Azərbaycan</Text>
                </View>
                <View style={{marginTop: 20,flexDirection:"row",alignItems:"center",gap:15}}>
                    <Image style={styles.flagSty} source={{ uri: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" }} />
                    <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"black"}}>Rus</Text>
                </View>
                <View style={{marginTop: 20,flexDirection:"row",alignItems:"center",gap:15}}>
                    <Image style={styles.flagSty} source={{ uri: "https://tolerance-homes.com/storage/images/pages/qP0fv1mqZpQwoJDnLJSeaxis4WhOye64LrbNaPet.jpeg" }} />
                    <Text style={{fontSize:16,fontFamily:"Poppins-Regular",color:"black"}}>Türk</Text>
                </View>
            </View>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({
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