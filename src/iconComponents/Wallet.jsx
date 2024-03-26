import React from 'react'
import CustomButtonIcon from '../components/CustomIconButton'
import { useNavigation } from '@react-navigation/native'
import { dark } from '../constants/Stylesheet'
import {Box, Bell, Wallet2, Wallet2Icon, WalletIcon } from 'lucide-react-native'
import { View } from '@gluestack-ui/themed'

const Wallet = ()=>{
const navigation = useNavigation();
return(
    <View style={{marginRight:30,}}>
 <CustomButtonIcon size={'xl'} buttonIcon={WalletIcon} iconColor={dark} onPress={()=>navigation.navigate('Balance')}/>
    </View>
)
}
export default Wallet