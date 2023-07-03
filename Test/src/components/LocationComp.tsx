import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import SvgStarReview from '../icons/StarReview';
import { restaurants } from '../data/restaurant';

const LocationComp = () => {
  const [data, setdata] = useState<any>([]);

  useEffect(() => {
    setdata(restaurants);
  }, []);

  return (
    <View>
      <View>
        <MapView style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 40.4280417,
            longitude: 49.8196028,
            latitudeDelta: 0.470,
            longitudeDelta: 0.520,
          }}>

          {data.map((markerData: any, index: any) => (
            <Marker
              key={index}
              coordinate={{
                latitude: markerData.lat,
                longitude: markerData.long,
              }}
              title={markerData.title}
              description={markerData.description}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default LocationComp;

const styles = StyleSheet.create({});
