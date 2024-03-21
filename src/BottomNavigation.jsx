import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Services,Packages,CloudKitchen} from './screens/TabScreens'
import CustomIcon from './components/CustomIcons';
import { CookingPot, HandPlatter, HomeIcon, Package } from 'lucide-react-native';
import { color } from 'framer-motion';
import CustomButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { accentBg, colorGrade1, colorGrade2 } from './constants/Stylesheet';


const BottomTabs = createBottomTabNavigator();


const BottomNavigation = ()=>{

return(
    <BottomTabs.Navigator screenOptions={{headerStatusBarHeight:20,headerTransparent:true,tabBarInactiveBackgroundColor:'white',tabBarActiveBackgroundColor:accentBg,tabBarActiveTintColor:'white',tabBarStyle:{height:60},tabBarItemStyle:{paddingBottom:10}}}>
    <BottomTabs.Screen component={Home} name="Home" options={{tabBarIcon:(({focused,color,size})=><CustomIcon icons={HomeIcon}/>)}}/>
    <BottomTabs.Screen component={Services} name="Services" options={{tabBarIcon:((color,size)=><CustomIcon icons={HandPlatter}/>)}}/>
    <BottomTabs.Screen component={Packages} name="Packages" options={{tabBarIcon:((color,size)=><CustomIcon icons={Package}/>)}}/>
    <BottomTabs.Screen component={CloudKitchen} name="Cloud Kitchen"options={{tabBarIcon:((color,size)=><CustomIcon icons={CookingPot}/>)}}/>
  </BottomTabs.Navigator>
  
)
}
export default BottomNavigation