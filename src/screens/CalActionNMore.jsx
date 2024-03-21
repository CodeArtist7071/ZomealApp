import {React,useState} from 'react'
import CustomButton from '../components/CustomButton'
import CustomText from '../components/CustomText'
import { Box, HStack,Text } from '@gluestack-ui/themed'
import { Balance, Calories } from '../components/CalAction'

const CalActionNMore=()=>{
   
return(
  <>
  <Text color='green'>handleButtonColor</Text>
  <Box w={'100%'} h={'200'} backgroundColor='green'></Box>
  </>
 
)
}
export default CalActionNMore

// {/* <Box alignContent={'space-around'} position={'fixed'} bottom='0' w={'100%'}>
// <Box>
//   <HStack justifyContent={'space-between'}>
//     <CustomButton   width={'$20'} height={'$20'} rounded={'full'} bgColor={'gray.50'}   handlePressEvent={()=>navigation.navigate('Balance')}>
//       <CustomText text={'Balance'}/>
//     </CustomButton>
//     {/* Cancel CustomButton Section */}
//     <CustomButton width={'$20'} height={'$20'} rounded={'full'} bgColor={color ? 'amber.500' : 'gray.50'} handlePressEvent={handleButtonColor}>
//       <CustomText text={isActive ? 'Active' : 'Cancel'}/>
//     </CustomButton>
//     {/* Calories CustomButton Section */}
//     <CustomButton  width={'$20'} height={'$20'} rounded={'full'} bgColor={'gray.50'} handlePressEvent={() => navigation.navigate('Calories')}>
//       <CustomText text={'Calories'}/>
//     </CustomButton>
//   </HStack>
// </Box>
// </Box>  */}