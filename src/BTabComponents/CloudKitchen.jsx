import React, { useEffect, useState } from 'react'
import firestore from "@react-native-firebase/firestore"
import { AddIcon, Box, Card, HStack, Icon, Image, ImageBackground, Pressable, Text } from '@gluestack-ui/themed'
import { Forklift, Home, Locate, MapPin, Utensils, UtensilsCrossed, View } from 'lucide-react-native'
import img from '../assets/Images/chicken_biryani.jpg'
import CustomText from '../components/CustomText'
import { accentBg, dark, textColor } from '../constants/Stylesheet'
import { useIsFocused } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import Animated, {useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const {width,height} = Dimensions.get('window');
const cardWidth = width * .95
const cardHeight = height*.3


const CloudKitchen=({navigation})=>{
    const [text, setText] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [location,setLocation] = useState('');
    const isFocused = useIsFocused();
    const translateX = useSharedValue(0);

    const originalText = "Unleash the flavors of the sky with our Cloud Kitchen creations.";

    useEffect(()=>{
      const docRef = firestore().collection('cloudKitchen').doc('RRtn1OWoDqJ1byRiGP5E').onSnapshot((documentSnapshot)=>{
        if(documentSnapshot.exists){
           const Data = documentSnapshot.data()
           setName(Data.Name)
           setAddress(Data.Address)
           setLocation(Data.Location.Latitude)
           console.log(Data)
        }
      })

      console.log(docRef)
    },[])

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
        setText(originalText.substring(0, index));
        index++;
        if (index > originalText.length) {
          clearInterval(intervalId);
        }
      }, 20); // Adjust the interval duration to control the typing speed
  
      return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
    }, []); // Run effect only once on component mount
  
  function handleBtn(){
    navigation.navigate('Customisation')
   }

return(
  <Box mt={100}>
    <Text my={50} marginLeft={20} fontSize={24.5} fontWeight={600} color={dark} height={150} width={300}>{text}</Text>
    <Animated.View style={[animatedStyle]}>
    <Card w={'95%'} padding={0} height={255} alignSelf='center'>
     <Image alt={'cloud kitchen'} width={cardWidth} height={cardHeight} borderRadius={5} source={img}/>
     </Card>
     <CustomText marginLeft={20} fontSize={16.5} paddingTop={10} color={dark} text={name}/>
     <HStack alignItems='center'>
      <Icon marginLeft={10} as={MapPin}  />
      <CustomText width={'95%'}  fontSize={15.5} marginLeft={20} paddingTop={10} color={'gray'} text={address}/>
     </HStack>
     <CustomText marginLeft={10} paddingTop={10} color={dark} text={location}/>
     <Pressable borderRadius={50} alignSelf='flex-end' marginRight={30} width={50} height={50} style={{backgroundColor:accentBg}} onPress={handleBtn}>
      <Icon color={textColor} size='xl' marginTop={10} alignSelf='center' as={UtensilsCrossed}/>
     </Pressable>
    </Animated.View>
  </Box>   
)
}
export default CloudKitchen