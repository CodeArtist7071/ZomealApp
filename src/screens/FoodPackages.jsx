import { LinearGradient } from '@gluestack-ui/themed'
import React from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { colorGrade1, colorGrade2 } from '../constants/Stylesheet'
import CustomCard from '../components/CustomCard'
import CustomText from '../components/CustomText'


const items = [
    {id:0,title:'Student Package'},
    {id:1,title:'Corporate Package'},
    {id:3,title:'Vendor Package'}
]

const FoodPackages=()=>{
return(
    <LinearGradient
    flex={1}
    colors={[colorGrade1,colorGrade2]}
    as={RNLinearGradient}>
        <CustomText text={'Please select your package'}/>
        {initialWindowMetrics.map(()=>{
            <CustomCard cardText={items.title} cardWidth={'100%'} cardHeight={200}/>
        })}
    <CustomCard cardText={'Student Package'}/>
    </LinearGradient>
)
}
export default FoodPackages