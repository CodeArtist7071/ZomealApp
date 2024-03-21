import React from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { LinearGradient } from '@gluestack-ui/themed'
import { colorGrade1, colorGrade2, primaryBg } from '../constants/Stylesheet'
import CustomAnimationCard from '../components/CustomAnimationCard'
import { Dimensions } from 'react-native'
import CalActionNMore from './CalActionNMore'
import BottomNavigation from '../BottomNavigation'

const {width, height} = Dimensions.get('window')
const cardWidth = width * .95;
const cardHeight = width * .5
const Dashboard=()=>{
return(
    <BottomNavigation/>
)
}
export default Dashboard