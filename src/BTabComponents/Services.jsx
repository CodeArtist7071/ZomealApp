import { Box, Card, LinearGradient, ScrollView } from '@gluestack-ui/themed'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { colorGrade1, colorGrade2 } from '../constants/Stylesheet'
import CustomText from '../components/CustomText'
import { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native';
import Animated, { useAnimatedStyle, withTiming, useSharedValue,Easing } from 'react-native-reanimated';
const Services =()=>{
  const [services, setServices] = useState();
  const isFocused = useIsFocused();
  const translateX = useSharedValue(300);

  useEffect(() => {
    translateX.value = withTiming(isFocused ? 0 : 300, { duration: 500,easing:Easing.out(Easing.exp) });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX:translateX.value}]
    };
  });

  useEffect(()=>{
    const unsubscribe = firestore().collection('Services')
    .onSnapshot(querySnaphot => {
      const data = []
      querySnaphot.forEach(documentSnapshot =>{
        const {} = documentSnapshot.data()
        data.push({
          id:documentSnapshot.id
        })
      })
      setServices(data)
    })
    return ()=> unsubscribe();
  },[])
    return(
      <Animated.View style={[animatedStyle]}>
 <LinearGradient
       colors={[colorGrade1,colorGrade2]}
       as={RNLinearGradient}>
        <Box w={'100%'} h={'30%'}/>
        <Card w={'100%'} h={'80%'} borderTopLeftRadius={30} borderTopEndRadius={30}>
            <ScrollView>
              <CustomText text={"Checking"}/>
            </ScrollView>
        </Card>
       </LinearGradient>
      </Animated.View>
      
    )
    }
export default Services