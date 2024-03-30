import { Box, LinearGradient } from "@gluestack-ui/themed"
import CustomAnimationCard from "../components/CustomAnimationCard"
import { Dimensions } from "react-native";
import { accentBg, colorGrade1, colorGrade2, dark, primaryBg } from "../constants/Stylesheet";
import {LinearGradient as RNLinearGradient} from "react-native-linear-gradient";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";


const {width, height} = Dimensions.get('window');
const cardWidth = width * 1;
const cardHeight = height* .4

const LoginRedirect= ({navigation})=>{

return(
   <>
   <CustomAnimationCard cardHeight={cardHeight} cardWidth={cardWidth} CardBgColor={primaryBg}/>
   <Box style={{marginBottom:10}}>
    <Box h={100}>
    <CustomText text={'Welcome to Zomeal'} textAlign={'center'} color={dark}fontSize={24} fontWeight={500} />
    <CustomText height={20} textAlign={'center'} text={'Indulge in the taste of food'} color={dark}/>
    </Box>
   <CustomButton borderRadius={50} title={'Login'} bgColor={accentBg} width={'70%'} height={50} variant={'outline'} alignSelf={'center'} borderColor={primaryBg} color={primaryBg} handlePressEvent={()=>navigation.navigate('Sign In')}/>
   <CustomButton  borderRadius={50} title={'Skip SignIn'} variant={'outline'} color={accentBg} width={'70%'} height={50} alignSelf={'center'}  marginTop={50} marginBottom={10} borderColor={primaryBg} handlePressEvent={()=>navigation.navigate('DummyDashboard')
   }/>
   </Box>
   </>




)
}
export default LoginRedirect