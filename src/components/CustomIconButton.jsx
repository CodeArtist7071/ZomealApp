import { Button, Icon } from '@gluestack-ui/themed'
import React from 'react'
import { Pressable } from 'react-native'

const CustomButtonIcon = ({buttonIcon,size,iconColor,onPress})=>{
return(
<Pressable onPress={onPress}>
    <Icon as={buttonIcon} size={size} color={iconColor}/>
</Pressable>
)
}
export default CustomButtonIcon