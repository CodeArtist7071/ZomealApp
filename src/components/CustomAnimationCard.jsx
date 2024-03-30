import React, { useState, useRef, useEffect } from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import CustomCard from './CustomCard';
import { secondaryBg } from '../constants/Stylesheet';
import { FlatList, View, Box,Image,Text } from '@gluestack-ui/themed';
import img1 from '../assets/Images/card1.png'
import img2 from '../assets/Images/card2.png'
import img3 from '../assets/Images/card3.png'

const { width } = Dimensions.get('window');

//Data will be invoke through firebase Storage
const DATA = [
  { id: '1', title: 'Card 1' ,src:img1},
  { id: '2', title: 'Card 2',src:img2},
  { id: '3', title: 'Card 3', src:img3},
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
        renderItem={({id, item }) => <Box key={item.id} width={cardWidth} height={cardHeight}>
          <Text>{title}</Text>
          <Box marginLeft={10} marginRight={10} alignSelf='center'>
          <Image borderRadius={20}  width={cardWidth} alignSelf='center' height={cardHeight} alt='card' source={item.src}/>
          </Box>
        </Box>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100
  },

  cardText: {
    fontSize: 20,
  },
});

export default CustomAnimationCard;
