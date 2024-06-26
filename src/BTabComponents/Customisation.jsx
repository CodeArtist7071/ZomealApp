import React, { useEffect, useState } from 'react';
import { View, Switch, Button, StyleSheet, Dimensions } from 'react-native';
import { Box, HStack, Card, Image, VStack,Text } from '@gluestack-ui/themed';
import CustomButtonIcon from '../components/CustomIconButton';
import { Minus, Plus } from 'lucide-react-native';
import CustomText from '../components/CustomText';
import { accentBg, dark, textColor } from '../constants/Stylesheet';
import img from '../assets/Images/chicken_biryani.jpg'
import CustomButton from '../components/CustomButton';
import { useIsFocused } from '@react-navigation/native'
import Animated, {useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated'

const items = [
  {
    id: 0,
    category: "Rice",
    data: [{id:0,src:img},
      { id: 1, name: 'Usna Rice', description: "With a nutty flavor and firm consistency, it's ideal for pilafs and stir-fries." },
      { id: 2, name: 'Arwa Rice', description: "Renowned for its aromatic fragrance and delicate texture, is a staple in many cuisines." },
    ],
  },
  
];

const {width,height} = Dimensions.get('window');
const cardWidth = width * .95
const cardHeight = height*.3

const Customisation = () => {
  const [text, setText] = useState('');
  const [isData1Active, setIsData1Active] = useState(false); // Toggle between data 1 and data 2
  const [quantity, setQuantity] = useState(items.map(() => 0)); // Initialize quantity for each category
  const isFocused = useIsFocused();
  const translateX = useSharedValue(0);
  const heading = "Indulge Your Senses with Personalized Perfection";

  // Toggle the active data
  const toggleSwitch = () => setIsData1Active(previousState => !previousState);

  // Increment quantity for the active data
  const incrementQuantity = (index) => {
    setQuantity(quantity.map((qty, qtyIndex) => qtyIndex === index ? qty + 1 : qty));
  };

  // Decrement quantity for the active data, ensuring it doesn't go below 0
  const decrementQuantity = (index) => {
    setQuantity(quantity.map((qty, qtyIndex) => (qtyIndex === index && qty > 0) ? qty - 1 : qty));
  };
   
  useEffect(()=>{
    translateX.value = withTiming(isFocused ? 0 : 1000, {duration:1000,easing:Easing.out(Easing.exp)})
   },[isFocused])
  
   const animatedStyle = useAnimatedStyle(()=>{
     return{
       transform: [{translateX:translateX.value}]
     }  
   })

   useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(heading.substring(0, index));
      index++;
      if (index > heading.length) {
        clearInterval(intervalId);
      }
    }, 20); // Adjust the interval duration to control the typing speed

    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []); // Run effect only once on component mount


  return (
    <Box style={{ marginTop: 100 }} justifyContent='center'>
      <Text marginLeft={20} fontSize={24.5} fontWeight={600} color={dark} height={150} width={300}>{text}</Text>
      {items.map((category, index) => (
        <Card key={index} w={'90%'} alignSelf='center' style={styles.card}>
          <HStack justifyContent='space-between'>
            <Box w={'50%'}>
              <Box paddingVertical={5} alignSelf='flex-start'>
              <Switch onValueChange={toggleSwitch} value={isData1Active} />
              </Box>
            <VStack>
              <CustomText width={'60%'} fontSize={15.5} color={dark} text={isData1Active ? category.data[1].name  : category.data[2].name} />
              <CustomText width={'95%'} paddingAxisY={10} color={dark} text={isData1Active ? category.data[1].description :category.data[2].description} />
            </VStack>
            </Box>
            <VStack w={'50%'}>
            <Image alt='food' style={{width:'$full',height:150,borderRadius:10}} source={img}/>
            <HStack width={'40%'} padding={2} borderColor={textColor} borderWidth={1} borderRadius={10} marginTop={'-$5'} backgroundColor={accentBg} justifyContent='center' alignSelf='center' alignItems='center'>
                <CustomButtonIcon iconColor={textColor} size={'md'} buttonIcon={Minus} onPress={() => decrementQuantity(index)} />
                <Box style={{ width: 25, height: 25 }}>
                  <CustomText color={textColor} fontSize={15.5} textAlign={'center'} text={`${quantity[index]}`} />
                </Box>
                <CustomButtonIcon iconColor={textColor} size={'md'} buttonIcon={Plus} onPress={() => incrementQuantity(index)} />
            </HStack>
            </VStack>
          </HStack>
        </Card>
      ))}
    <CustomButton/>  
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  toggleContainer: {
    marginBottom: 10,
  },
});

export default Customisation;
