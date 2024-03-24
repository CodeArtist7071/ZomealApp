import { FlatList,View, Box,Text,Card, ScrollView, LinearGradient, HStack, Icon } from '@gluestack-ui/themed'
import React, { useRef } from 'react'
import CustomLink from '../components/CustomLink'
import { colorGrade2,colorGrade1, primaryBg, dark, accentBg } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient'
import CustomIcon from '../components/CustomIcons'
import { AlertCircle, BookUser, CalendarCheck, Camera, CircleDotIcon, CircleUserIcon, Languages, LogOut, MessageCircleQuestion, MessageCircleWarning, MessageSquare, Trash2, UserRoundSearch } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'
import auth from "@react-native-firebase/auth"
import CustomToast from '../components/CustomToast'

const items=[
    {id:'1',title:'View Profile',icon:CircleUserIcon,page:"Profile"},
    {id:'2',title:"View Subscription",icon:CalendarCheck,page:"Subscription"},
    {id:'3',title:"Address",icon:BookUser,page:"Address"},
    {id:'4',title:"Frequently Asked Questions",icon:MessageCircleQuestion,page:"FAQ"},
    {id:'5', title:'SendFeedback',icon:MessageSquare,page:"Feedback"},
    {id:'6', title:'Report for an safety concerns',icon:MessageCircleWarning,page:"Report"},

]
const Settings=({navigation})=>{
    const flatListRef = useRef(null)

    const handleSignOut = async () => {
        try {
          await auth().signOut();
          return(
            <CustomToast toastVariant={'solid'} toastPlacement={'bottom'} toastAction={'success'} toastTitle={"Signed out successfully"}/>
          )
        } catch (error) {
          console.error("Error signing out:", error);
        }
      };


return(

<ScrollView
scrollEnabled
>
    {items.map((item, index) => (
        <Box w={'95%'} h={'100'} mt={'$2'} rounded={'$xl'} my={'$1'} justifyContent='center' alignSelf='center' key={index} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <HStack> 
            <CustomIcon IconColor={accentBg} icons={item.icon}/>
            <CustomButton color={dark} fontSize={14.5} handlePressEvent={()=>navigation.navigate(item.page)} title={item.title}/>
        </HStack>
        </Box>
      ))}
      <Box w={'95%'} h={'100'} mt={'$2'} rounded={'$xl'} my={'$1'} justifyContent='center' alignSelf='center' style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <HStack> 
            <CustomIcon IconColor={accentBg} icons={LogOut}/>
            <CustomButton color={dark} fontSize={14.5} handlePressEvent={handleSignOut} title={'Logout'}/>
        </HStack>
      </Box>
      
</ScrollView>


)
}
export default Settings