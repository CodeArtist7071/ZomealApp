import React from 'react'
import CustomButtonIcon from '../components/CustomIconButton'
import { dark, textColor } from '../constants/Stylesheet'
import { Box, Menu } from 'lucide-react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { View } from '@gluestack-ui/themed'
import Animated, { useSharedValue,Easing } from 'react-native-reanimated'

const Hamburger = ()=>{
    const navigation = useNavigation();
   
return(
    <View style={{marginLeft:20}}>
    <CustomButtonIcon buttonIcon={Menu} size={'xl'} iconColor={dark} onPress={()=>navigation.navigate('Settings')}/>
    </View>
)
}
export default Hamburger