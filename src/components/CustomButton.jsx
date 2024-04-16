import {useState} from 'react'
import { Box, Button, ButtonText } from '@gluestack-ui/themed'
import { Pressable } from '@gluestack-ui/themed'
import { Text, TouchableOpacity} from 'react-native'


const CustomButton =({title,size,rounded,variant,bg,hoverBg,fontSize,borderColor,borderRadius,handlePressEvent,width,height,alignSelf,bgColor,color,marginTop,marginBottom,marginHorizontal,marginVertical,marginLeft,marginRight,shadowColor,shadowOffset,shadowOffsetHeight,shadowOffsetWidth,shadowOpacity,shadowRadius, ...props})=>{
return(
<TouchableOpacity style={{alignSelf:alignSelf,borderRadius:borderRadius,marginBottom:marginBottom,marginTop:marginTop,backgroundColor:bgColor,width:width,height:height}} onPress={handlePressEvent}>
  <Box style={{justifyContent:'center',alignSelf:'center',height:50}}>
    <Text style={{color:color}}>{title}</Text>
  </Box>
</TouchableOpacity>
)
}
export default CustomButton