import React from 'react'
import CustomButtonIcon from '../components/CustomIconButton'
import { useNavigation } from '@react-navigation/native'
import { dark } from '../constants/Stylesheet'
import {Box, Bell } from 'lucide-react-native'
import { View } from '@gluestack-ui/themed'

const Notification = ()=>{
    const navigation = useNavigation();
return(
    <View style={{marginRight:20}}>
 <CustomButtonIcon  size={'xl'} buttonIcon={Bell} iconColor={dark} onPress={()=>navigation.navigate('Notify')}/>
    </View>
)
}
export default Notification