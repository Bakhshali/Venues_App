import React, { useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity ,Image} from 'react-native';

const MyComponent = () => {
  const flatListRef :any = useRef(null);
  const data = [
    { id: 1, text: 'Veri 1',image:require("../assets/image/Food/sezar.jpg") },
    { id: 2, text: 'Veri 2' },
    { id: 3, text: 'Veri 3' },
    { id: 3, text: 'Veri 3' },
    { id: 3, text: 'Veri 3' },
    { id: 3, text: 'Veri 3' },
    // Diğer veriler...
  ];

  const scrollToNextItem = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: 1 });
    }
  };

  const renderItem = ({ item }:any) => (
    <View style={{ width: 200, height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity onPress={scrollToNextItem}>
        <Text>Geri Git</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default MyComponent;
