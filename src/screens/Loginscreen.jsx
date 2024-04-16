import React, { useState } from 'react';
import { Dimensions, TouchableOpacity,Text} from 'react-native';
import { KeyboardAvoidingView, Box, Card, ScrollView, Divider, LinearGradient, SafeAreaView, HStack } from '@gluestack-ui/themed'; // Assuming these are custom styled components
import CustomButton from '../components/CustomButton';
import Textfield from '../components/CustomTextfield';
import CustomText from '../components/CustomText';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomPagination from '../components/CustomAnimationCard';
import CustomDivider from '../components/CustomDivider';
import {primaryBg,secondaryBg,textColor,accentBg, fontSizeMedium, dark,colorGrade1, colorGrade2} from '../constants/Stylesheet'
import {LinearGradient as BVLinearGradient} from 'react-native-linear-gradient'
import CustomLink from '../components/CustomLink';
import { Check } from 'lucide-react-native';
const coverImage = require('../assets/images/coverImage.png');




const Loginscreen = ({handleChangeText,value,handlePress}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}  behavior="padding">

    
      <Box py={'$40'} flex={1} justifyContent='center' alignContent='center'>
        <CustomText 
          paddingAxisY={'$12'}
          text={'Lets Start !'} 
          justifyContent={'center'} 
          textAlign={'center'} 
          fontSize={30} 
          fontWeight={500}
          color={dark} />
          <Textfield  
             width={'70%'} 
             size={'xl'}   
             color={dark} 
             labelText={'Phone Number'} 
             keyboardType={'numeric'}
             errorText={'Must be Atleasat 10 Digits.'}
             labelColor={dark}
             value={value}
             handleChangeText={handleChangeText}
             inputFieldColor={accentBg}
             fontSize={fontSizeMedium}
             labelFontSize={15}
             InputSlotbackgroundColor={'orange'}
             padding={'$3'}
             countryCode={'+91'}
            />
            <HStack width={'80%'} alignSelf='center'>
            <CustomCheckbox as={Check} label={'By loging in, You agree to our Terms and Conditions.'} size={'md'}/>
            </HStack>
         <CustomButton borderRadius={50} size={'xl'} marginTop={20} title={'Send Code'} width={'70%'} height={50} alignSelf={'center'} bgColor={accentBg} color={primaryBg} handlePressEvent={handlePress} marginVertical={30}/>
      </Box>
</KeyboardAvoidingView> 
  );
};


export default Loginscreen;
