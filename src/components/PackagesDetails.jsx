import React from 'react'
import CustomText from '../components/CustomText'
import { Dimensions } from 'react-native'
import CustomAnimationCard from '../components/CustomAnimationCard'
import { accentBg, colorGrade1, colorGrade2, dark, primaryBg, textColor } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { Box, Card, SafeAreaView,HStack, Text, ScrollView, Button, LinearGradient } from '@gluestack-ui/themed'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import firestore from '@react-native-firebase/firestore';


const PackageDetails = async () => {

    const Packages = await firestore().collection('Packages');

 return (

<Box h={'100%'}>
    <ScrollView h={'$88'} marginTop={80}>
        <Box flex={1} mb={'$10'} justifyContent='center' alignItems='center'>
        <Card width={'95%'} height={200}/>

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

   
    </Box>



    )
}


export default PackageDetails;
