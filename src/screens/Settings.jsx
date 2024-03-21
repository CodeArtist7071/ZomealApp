import { FlatList,View, Box,Text,Card, ScrollView, LinearGradient, HStack, Icon } from '@gluestack-ui/themed'
import React, { useRef } from 'react'
import CustomLink from '../components/CustomLink'
import { colorGrade2,colorGrade1, primaryBg } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient'
import CustomIcon from '../components/CustomIcons'
import { AlertCircle, BookUser, CalendarCheck, Camera, CircleDotIcon, CircleUserIcon, Languages, LogOut, MessageCircleQuestion, MessageCircleWarning, MessageSquare, Trash2, UserRoundSearch } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'


const items=[
    {id:'1',title:'Your Profile',icon:CircleUserIcon,page:"Profile"},
    {id:'2',title:"Your Subscription",icon:CalendarCheck,page:"Subscription"},
    {id:'3',title:"Address",icon:BookUser,page:"Address"},
    {id:'4',title:"Frequently Asked Questions",icon:MessageCircleQuestion,page:"FAQ"},
    {id:'5',title:'Choose language',icon:Languages,page:"Languages"},
    {id:'6' ,title:'About',icon:UserRoundSearch,page:"About"},
    {id:'7', title:'SendFeedback',icon:MessageSquare,page:"Feedback"},
    {id:'8', title:'Report for an safety concerns',icon:MessageCircleWarning,page:"Report"},
    {id:'9',title:'Log Out',icon:LogOut},
    {id:'10',title:'Delete Account',icon:Trash2}
]
const Settings=({navigation})=>{
    const flatListRef = useRef(null)
return(

<ScrollView
scrollEnabled
>
    {/* Map over the array to create components */}
    {items.map((item, index) => (
        <Card w={'95%'} h={'100'} mt={'$2'} rounded={'$xl'} bgColor={primaryBg} my={'$1'} justifyContent='center' alignSelf='center' key={index} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <HStack> 
            <CustomIcon icons={item.icon}/>
            <CustomButton handlePressEvent={()=>navigation.navigate(item.page)} title={item.title}/>
            </HStack>
        </Card>
      ))}
</ScrollView>


)
}
export default Settings