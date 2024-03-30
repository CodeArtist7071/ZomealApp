import React from 'react'
import CustomAnimationCard from '../components/CustomAnimationCard'
import { accentBg, colorGrade1, colorGrade2, dark, primaryBg, textColor } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { Box, Card, SafeAreaView,HStack, Text, ScrollView, Button, LinearGradient, Image } from '@gluestack-ui/themed'
import CustomButton from '../components/CustomButton'
import { useState,useEffect } from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import CustomText from '../components/CustomText'
import { Dimensions } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import MealMenu from '../components/MealMenu'
import { useIsFocused } from '@react-navigation/native'
import img from '../assets/Images/chicken_biryani.jpg'
import Animated, {useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const {width,height} = Dimensions.get('window')
const cardWidth = width * .95
const cardHeight = height * .3

  const Home=({navigation})=>{
    const [color, setColor] = useState(false)
    const [isActive, setActive] = useState(false)
    const isFocused = useIsFocused();
    const translateY = useSharedValue(0);
   

    useEffect(()=>{
     translateY.value = withTiming(isFocused ? 0 :900, {duration:1000,easing:Easing.out(Easing.exp)})
    },[isFocused])
   
    const animatedStyle = useAnimatedStyle(()=>{
      return{
        transform: [{translateY:translateY.value}]
      }  
    })


    const handleButtonColor = (color) => {
      setColor(!color)
      setActive(!isActive)
      navigation.navigate('Cancel Service')
      
     }

return(
  <Animated.View style={[animatedStyle]}>
  <Box h={'100%'}>
    <ScrollView h={'$90'} marginTop={80}>
        <CustomAnimationCard cardHeight={cardHeight} cardWidth={cardWidth} CardBgColor={'white'}/>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Box width={'95%'}>
          <MealMenu/>
        </Box>
        </Box> 
        <Box flex={1} my={'$10'} justifyContent='center' alignItems='center'>
        <Card padding={0} width={'95%'} height={200}>
          <Image alt='image' width={cardWidth} height={cardHeight} objectFit='contain' source={img}/>
        </Card>
        </Box> 
        
    </ScrollView>
    <Card h={'$15'} backgroundColor={'$trueGray100'} borderTopLeftRadius={30} borderTopEndRadius={30}>
    <HStack width={'80%'} marginTop={'-$16'} marginLeft={'auto'} marginRight={'auto'} justifyContent='center' alignItems='center'>
    <Box padding={'$3'} bgColor='$trueGray100' borderRadius={50}>
    <CustomButton borderRadius={50} color={textColor} fontSize={12.5} title={'Skip'} width={80} height={80} shadowColor={'#000'} shadowOffsetWidth={2} shadowOffsetHeight={10} shadowOpacity={.9} shadowRadius={4} rounded={'$full'} bgColor={accentBg} handlePressEvent={handleButtonColor}/>
    </Box>
    </HStack>
    </Card>
    </Box>

  </Animated.View>
   
)
}
export default Home