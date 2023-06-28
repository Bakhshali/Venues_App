import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { restaurants } from '../data/restaurant';

const NearbyScreen = ({ route }: any) => {
  const item = route.params;
  const palaces = restaurants.filter(c => c.categoryId == item.id)
  
  return (
    <View>
      {
        palaces.map((vanues: any) => (
          <View>
            <TouchableOpacity>
              <Text>{vanues.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </View>
  )
}

export default NearbyScreen

const styles = StyleSheet.create({})