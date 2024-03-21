import {useState} from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed'
const CustomButton =({title,size,rounded,variant,fontSize,borderColor,borderRadius,handlePressEvent,width,height,alignSelf,bgColor,color,marginTop,marginBottom,marginHorizontal,marginVertical,marginLeft,marginRight,shadowColor,shadowOffset,shadowOffsetHeight,shadowOffsetWidth,shadowOpacity,shadowRadius, ...props})=>{
return(
<Button borderRadius={borderRadius} w={width} h={height} justifyContent='center' alignSelf={alignSelf} size={size} variant={variant} onPress={handlePressEvent} style={{shadowColor:shadowColor,
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