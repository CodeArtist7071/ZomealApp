import { Icon } from '@gluestack-ui/themed'
import React from 'react'
const CustomIcon=({icons,IconColor,size})=>{
return(  
<Icon as={icons} size={size} color={IconColor}/>
)
}
export default CustomIcon