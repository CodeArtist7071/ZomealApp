import React, { useState, useRef, useEffect } from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import CustomCard from './CustomCard';
import { secondaryBg } from '../constants/Stylesheet';
import { FlatList, View } from '@gluestack-ui/themed';

const { width } = Dimensions.get('window');

//Data will be invoke through firebase Storage
const DATA = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
];



const CustomAnimationCard = ({cardHeight,cardWidth,title,CardBgColor,cardTransitionTime}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < DATA.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        setCurrentIndex(currentIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0 });
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={DATA}
        renderItem={({ item }) => <CustomCard cardWidth={cardWidth} cardHeight={cardHeight} title={title} CardBgColor={CardBgColor}/>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
  },

  cardText: {
    fontSize: 20,
  },
});

export default CustomAnimationCard;
