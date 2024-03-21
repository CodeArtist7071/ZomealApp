import React from 'react'
import CustomText from '../components/CustomText'
import CalActionNMore from './CalActionNMore'
import { Dimensions } from 'react-native'
import CustomAnimationCard from '../components/CustomAnimationCard'
import { accentBg, dark, primaryBg, textColor } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { Box, Card, SafeAreaView,HStack, Text, ScrollView, Button } from '@gluestack-ui/themed'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'




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
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200} />
        </Box>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200} />
        </Box>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200} />
        </Box>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200} />
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
const Services=()=>{
return(
   <>
    <Box w={'100%'} h={'30%'}/>
    <Card w={'100%'} h={'80%'} borderTopLeftRadius={30} borderTopEndRadius={30}>
        <ScrollView>

        </ScrollView>
    </Card>
   </>
)
}
const Packages=()=>{
 return(
    
 )
}
const CloudKitchen=()=>{
return(
    <CustomText text={'CloudKitchen'}/>
)
}
export {Home,Services,Packages,CloudKitchen}