import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcons';
import { Box, Cloudy, CookingPot, FileCog, HandPlatter, HomeIcon, Package } from 'lucide-react-native';
import { color } from 'framer-motion';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { accentBg, colorGrade1, colorGrade2, textColor } from '../constants/Stylesheet';
import  Home  from '../BTabComponents/Home';
import  Services  from '../BTabComponents/Services';
import Packages  from '../BTabComponents/Packages';
import Customisation  from '../BTabComponents/Customisation';
import Animated, { useAnimatedStyle, withTiming, useSharedValue, useEffect } from 'react-native-reanimated';
import Hamburger from '../iconComponents/Hamburger';
import Notification from '../iconComponents/Notification';
import Wallet from '../iconComponents/Wallet';
import { HStack, styled } from '@gluestack-ui/themed';
import Logo from '../iconComponents/Logo';
import CloudKitchen from '../BTabComponents/CloudKitchen'


const BottomTabs = createBottomTabNavigator();


const BottomNavigation = ()=>{

return(
    <BottomTabs.Navigator screenOptions={{headerTitle:'',headerRight:()=>(<HStack alignItems={'center'}><Wallet/><Notification/></HStack>), gestureEnabled:true,headerStatusBarHeight:20,headerLeft:()=>(<HStack justifyContent='space-between' alignItems='center'><Hamburger/><Logo/></HStack>), headerTransparent:true, tabBarIcon:(({focused,color,size})=><CustomIcon icons={HomeIcon}/>),headerTransparent:true,tabBarInactiveBackgroundColor:'white',tabBarActiveBackgroundColor:accentBg,tabBarActiveTintColor:'white',tabBarStyle:{height:60},tabBarItemStyle:{paddingBottom:10}}}>
    <BottomTabs.Screen component={Home} name="Home" options={{headerRight:()=>(<HStack alignItems={'center'}><Wallet/><Notification/></HStack>),headerLeft:()=>(<HStack justifyContent='space-between' alignItems='center'><Hamburger/><Logo/></HStack>), headerTransparent:true, tabBarIcon:(({focused,color,size})=><CustomIcon icons={HomeIcon}/>)}}/>
    <BottomTabs.Screen component={CloudKitchen} name="Cloudkitchen" options={{tabBarIcon:((color,size)=><CustomIcon icons={Cloudy}/>)}}/>
    <BottomTabs.Screen component={Packages} name="Packages" options={{tabBarIcon:((color,size)=><CustomIcon icons={Package}/>)}}/>
    <BottomTabs.Screen component={Services} name="Services" options={{headerTintColor:textColor,tabBarIcon:((color,size)=><CustomIcon icons={HandPlatter}/>)}}/>
  </BottomTabs.Navigator>
  
)
}
export default BottomNavigation