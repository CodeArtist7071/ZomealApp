import { Pressable, Text } from '@gluestack-ui/themed'
import React from 'react'

const CustomPresable=({onPress,p,bg,hoverBg,color,text,style})=>{
    return(
        
 <Pressable
 onPress={onPress} p={p} bg={bg} $hover-bg={hoverBg}>
 <Text color={color}>{text}</Text>
</Pressable>
    )
}
export default CustomPresable