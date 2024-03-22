import React from 'react'
import CustomAnimationCard from '../components/CustomAnimationCard'
import { accentBg, colorGrade1, colorGrade2, dark, primaryBg, textColor } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { Box, Card, SafeAreaView,HStack, Text, ScrollView, Button, LinearGradient } from '@gluestack-ui/themed'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import CustomText from '../components/CustomText'
import { Dimensions } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import MealMenu from '../components/MealMenu'

const {width,height} = Dimensions.get('window')
const cardWidth = width * .95
const cardHeight = height * .3

  const Home=({navigation})=>{
    const [color, setColor] = useState(false)
    const [isActive, setActive] = useState(false)
    const handleButtonColor = (color) => {
      setColor(!color)
      setActive(!isActive)
     }
return(
    <Box h={'100%'}>
    <ScrollView h={'$88'} marginTop={80}>
        <CustomAnimationCard cardHeight={cardHeight} cardWidth={cardWidth} CardBgColor={'white'}/>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200}>
          <MealMenu/>
        </Card>
        </Box> 
        <Box flex={1} my={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200}/>
        </Box> 
        
    </ScrollView>
    <Card py={'$4'} backgroundColor={textColor} borderTopLeftRadius={30} borderTopEndRadius={30}>
    <HStack width={'80%'} py={'$6'} marginLeft={'auto'} marginRight={'auto'} justifyContent='space-between' alignItems='center'>
    <CustomButton borderRadius={50} width={80} height={80} shadowColor={dark} shadowOffsetWidth={10} shadowOffsetHeight={10} shadowOpacity={.5} shadowRadius={3.84} bgColor={accentBg} handlePressEvent={()=>navigation.navigate('Balance')}/>
    <CustomButton borderRadius={50} color={textColor} fontSize={12.5} title={isActive ? 'Active' : 'Cancel'} width={80} height={80} shadowColor={'#000'} shadowOffsetWidth={2} shadowOffsetHeight={10} shadowOpacity={.9} shadowRadius={4} rounded={'$full'} bgColor={accentBg} handlePressEvent={handleButtonColor}/>
    <CustomButton borderRadius={50} width={80} height={80} shadowColor={dark} shadowOffsetWidth={10} shadowOffsetHeight={10} shadowOpacity={.5} shadowRadius={3.84} bgColor={accentBg} handlePressEvent={()=>navigation.navigate('Calories')}/>
    </HStack>
    </Card>
    </Box>

)
}
export default Home