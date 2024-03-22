import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomTextfield from '../components/CustomTextfield'
import { accentBg, colorGrade1, colorGrade2, dark, textColor } from '../constants/Stylesheet'
import CustomButton from '../components/CustomButton'
import CustomModal from '../components/CustomModal'
import { Card, KeyboardAvoidingView, LinearGradient } from '@gluestack-ui/themed'
import { Box } from '@gluestack-ui/themed'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import CustomText from '../components/CustomText'

const PincodePrompt=({navigation})=>{
 const [confirm, setConfirm] = useState(true)
return(
    <LinearGradient style={{width:'100%', height:'100%'}}
    colors={[colorGrade1,colorGrade2]}
    as={RNLinearGradient}
    >
   <KeyboardAvoidingView flex={1} justifyContent='center' alignContent='center'>
        <Box width={'95%'} height={250} marginLeft={'auto'} marginRight={'auto'} style={{backgroundColor:dark,opacity:.1,borderRadius:10}}/>
        <Box width={'95%'} height={250} marginLeft={'auto'} marginRight={'auto'} alignSelf='center' style={{ position:'absolute',backgroundColor:'none'}}> 
        <CustomText text={'Verify your Pincode'} color={textColor} fontSize={15.5} fontWeight={600} textAlign={'center'} paddingAxisY={20}/>
        <CustomTextfield keyboardType={'number-pad'} handleChangeText={'value'} size={'xl'} width={'100%'} inputFieldColor={dark} variant={'default'} errorText={'Please a enter pincode'} isRequired={true} labelFontSize={14.5} bgColor={textColor} labelText={'Please enter the pincode'} labelColor={textColor}/>
        <CustomButton title={'Verify Pincode'} bgColor={accentBg} color={textColor} alignSelf={'center'} width={'70%'} height={50} borderRadius={50}  handlePressEvent={ confirm ? ()=>navigation.navigate('Packages'):(<CustomModal/>)}/>
       
        </Box>
    </KeyboardAvoidingView>
    </LinearGradient>
 
)
}
export default PincodePrompt