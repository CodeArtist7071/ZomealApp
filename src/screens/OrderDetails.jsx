import React, { useEffect, useState } from 'react'
import { Box, Button, ButtonText, Card, HStack, ScrollView, Text, View } from '@gluestack-ui/themed'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import CustomText from '../components/CustomText'
import { accentBg, dark, textColor } from '../constants/Stylesheet'
import { Pressable } from 'react-native'
import CustomButtonIcon from '../components/CustomIconButton'
import { PencilIcon } from 'lucide-react-native'


const OrderDetails = ({navigation})=>{
    const [data,setData]= useState();
    const [name,setName] = useState();
    const[lname,setlname] = useState();
    const [address,setAddress] = useState();
    const [phn,setPhn] = useState();
    const [price,setPrice] = useState();
    const [lperPrice,setlperPrice] = useState();
    const [dperPrice,setdperPrice] = useState();
    const [packageType, setPackageType] = useState();
    const [landmark, setLandmark] = useState();
    const [locality,setLocality] = useState();
    const [pincode, setPincode] = useState();
    useEffect(()=>{
        const fetchingData= async()=>{
          const user = auth().currentUser.uid  
         const docRef = firestore().collection('users').doc('XbK18bAOfoxz8ln4zxD7')
         const docSnapshot = await docRef.get();
         if(docSnapshot.exists){
            const Data = docSnapshot.data()
            setName(Data.firstName),
            setAddress(Data.address),
            setPhn(Data.phoneNumber),
            setPrice(Data.price),
            setlperPrice(Data.lMealPerPrice),
            setdperPrice(Data.dMealPerPrice),
            setPackageType(Data.packageType),
            setLandmark(Data.landmark),
            setLocality(Data.locality),
            setPincode(Data.pincode),
            setlname(Data.lastName)

         }
        }
        fetchingData();
    },[])

    function handleSkipBtn(){
        return(
        navigation.navigate('Dashboard')
        )
    }
    
 
return(
    <Box h={'$full'}>
    <ScrollView w={'100%'} pt={50}>
    <Card w={'95%'} mt={4} alignSelf='center'>
     <CustomText fontSize={17.5} fontWeight={500} color={dark} text={'Customer Details'}/>
     <HStack my={5} justifyContent='space-between'>
        <CustomText color={dark} text={'name'}/><CustomText color={dark} text={name+' '+lname}/>
     </HStack>
     <HStack my={5} justifyContent='space-between'>
        <CustomText color={dark} text={'Phone Number'}/><CustomText color={dark} text={phn}/>
     </HStack>
    </Card>
    <Card w={'95%'} mt={4} alignSelf='center'>
<CustomText height={40} color={dark} fontWeight={500} fontSize={21.5} text={packageType}/>    
<HStack my={5} justifyContent='space-between'>
    <CustomText color={dark} text={"Price Per Meal (Lunch)"}/><CustomText color={dark} text={lperPrice}/>
</HStack>  
<HStack my={5} justifyContent='space-between'>
<CustomText color={dark} text={"Price Per Meal (Dinner)"}/><CustomText color={dark} text={dperPrice}/>
</HStack >
</Card>
    <Card w={'95%'} mt={4} alignSelf='center'>
    <HStack my={5} justifyContent='space-between'>
        <CustomText color={dark} text={'Pincode'}/><CustomText color={dark}  text={pincode}/>
     </HStack>
     <HStack my={5} justifyContent='space-between'>
        <CustomText color={dark} text={'Landmark'}/><CustomText color={dark} text={landmark}/>
     </HStack>
     <HStack my={5} justifyContent='space-between'>
        <CustomText color={dark} text={'Locality'}/><CustomText color={dark} text={locality}/>
     </HStack>
        <HStack justifyContent='space-between'>
        <CustomText paddingAxisY={20} fontWeight={500} fontSize={17.5} color={dark} text={'Delivery Address'}/>
        <CustomButtonIcon size={'lg'} iconColor={dark} buttonIcon={PencilIcon}/>
        </HStack>
        <CustomText color={dark} text={address}/>
    </Card>
<Card w={'95%'} mt={4} alignSelf='center'>
<CustomText paddingBottom={15} color={dark} text={'Price Details'} fontSize={16.5} fontWeight={600}/>

<HStack my={5} justifyContent='space-between'>
<CustomText color={dark} text={"Price"}/><CustomText color={dark} text={price}/>
</HStack>
<HStack my={5} justifyContent='space-between'>
    <CustomText color={dark} text={"Discount Price"}/><CustomText color={"green"} text={"-300"}/>
</HStack>  
<HStack my={5} justifyContent='space-between'>
<CustomText color={dark} text={"Delivery Charges"}/><CustomText color={'green'} text={"Free Delivery"}/>
</HStack >
</Card>
</ScrollView>
<HStack px={10} alignItems='center'justifyContent='space-between' w={'100%'} h={100} backgroundColor={textColor} bottom={0} position='relative'>
<Pressable onPress={handleSkipBtn}>
    <Button borderRadius={50} width={150} height={50} backgroundColor={accentBg}>
        <ButtonText>Skip</ButtonText>
    </Button>
</Pressable>    
<Pressable>
    <Button borderRadius={50} width={150} height={50} backgroundColor={accentBg}>
        <ButtonText>Continue</ButtonText>
    </Button>
</Pressable>
</HStack>
</Box>
   
)
}
export default OrderDetails