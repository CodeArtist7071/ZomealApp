import { Switch } from '@gluestack-ui/themed'
import React from 'react-native'
const CustomSwitch=({size,isDisabled})=>{
return(
    <Switch size={size} isDisabled={isDisabled}/>
)
}
export default CustomSwitch