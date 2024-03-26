import { Box, Button, Card, HStack, LinearGradient, Pressable, Text, View } from '@gluestack-ui/themed'
import React, { useState } from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import CustomButton from '../components/CustomButton'
import { accentBg, colorGrade1, colorGrade2, dark, textColor } from '../constants/Stylesheet'
import CustomText from '../components/CustomText'
import { TouchableOpacity } from 'react-native'
import GradientButton from '../components/GradientButton'
import CustomDivider from '../components/CustomDivider'



const PackagePrompt = ({navigation})=>{

    const [selectedButton, setSelectedButton] = useState(1); // State to track the selected button

    const handleButtonPress = (buttonIndex) => {
      setSelectedButton(buttonIndex); // Update the selected button state
    };
  
return(
<View flex={1} justifyContent='center' alignContent='center'>
        <CustomText width={'70%'} marginLeft={20} paddingBottom={20} fontSize={17.5} fontWeight={500} color={dark} textAlign={'left'} text={'Choose the Perfect Package for Your Taste...!'}/>
        <HStack justifyContent='space-between' alignSelf='center' marginBottom={20} style={{width:'95%',height:50,borderRadius:50,backgroundColor:colorGrade2}}>
        <GradientButton
        title="Button 1"
        onPress={() => handleButtonPress(1)}
        isSelected={selectedButton === 1}
      />
      <GradientButton
        title="Button 2"
        onPress={() => handleButtonPress(2)}
        isSelected={selectedButton === 2}
      />
      <GradientButton
        title="Button 3"
        onPress={() => handleButtonPress(3)}
        isSelected={selectedButton === 3}
      />
        </HStack>
          <Card style={{width:'95%',alignSelf:'center',borderRadius:30}}>
        <Box style={{height:450}}>
        
        </Box>
        <TouchableOpacity onPress={()=>navigation.navigate('MenuPrompt')}>
        <RNLinearGradient
        style={{width:'60%',height:55,borderRadius:50,alignSelf:'center'}}
        colors={[colorGrade1,colorGrade2]}> 
        <Text textAlign='center'alignSelf='center'color={textColor} marginTop={15}>Buy Now</Text>
        </RNLinearGradient>
        </TouchableOpacity>
    </Card>
</View>
)
}
export default PackagePrompt