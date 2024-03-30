import {useState} from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed'
import { Pressable } from '@gluestack-ui/themed'
const CustomButton =({title,size,rounded,variant,bg,hoverBg,fontSize,borderColor,borderRadius,handlePressEvent,width,height,alignSelf,bgColor,color,marginTop,marginBottom,marginHorizontal,marginVertical,marginLeft,marginRight,shadowColor,shadowOffset,shadowOffsetHeight,shadowOffsetWidth,shadowOpacity,shadowRadius, ...props})=>{
return(

<Button borderRadius={borderRadius} w={width} h={height} justifyContent='center' onPress={handlePressEvent} alignSelf={alignSelf} size={size} variant={variant} style={{shadowColor:shadowColor,
    shadowOffset: {
      width: shadowOffsetWidth,
      height:shadowOffsetHeight,
    },
    shadowOpacity:shadowOpacity,
    shadowRadius:shadowRadius , backgroundColor:bgColor,borderColor:borderColor,marginTop:marginTop,marginBottom:marginBottom,marginHorizontal:marginHorizontal,marginVertical:marginVertical,marginRight:marginRight,marginLeft:marginLeft}} {...props}>
    <ButtonText style={{fontSize:fontSize,color:color}}>{title}</ButtonText>
</Button>


)
}
export default CustomButton