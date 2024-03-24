import { Box, Card, HStack, LinearGradient, ScrollView, View } from '@gluestack-ui/themed'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { accentBg, colorGrade1, colorGrade2, dark, textColor } from '../constants/Stylesheet'
import CustomText from '../components/CustomText'
import { useEffect, useState,useContext } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native';
import Animated, { useAnimatedStyle, withTiming, useSharedValue,Easing } from 'react-native-reanimated';
import {  Text, TouchableOpacity, StyleSheet,Button } from 'react-native';
import React from 'react'
import CustomButton from '../components/CustomButton'

const MenuCard = () => {
  const { selectedService } = useContext(ServiceContext);

  // Assuming you have different menus for each service
  let menuText = '';
  switch (selectedService) {
    case 'Both':
      menuText = 'Both Lunch and Dinner Menu';
      break;
    case 'Lunch':
      menuText = 'Lunch Menu';
      break;
    case 'Dinner':
      menuText = 'Dinner Menu';
      break;
    default:
      menuText = 'No menu selected';
  }

  return (
    <View style={styles.menuCard}>
      <Text>{menuText}</Text>
    </View>
  );
};


// Create a context to manage the selected service
const ServiceContext = React.createContext();
const Services =()=>{
  const [services, setServices] = useState();
  const isFocused = useIsFocused();
  const translateY = useSharedValue(300);
  const [selectedService, setSelectedService] = useState('Both');

useEffect(() => {
    translateY.value = withTiming(isFocused ? 0 : 1000, { duration: 1000,easing:Easing.out(Easing.exp) });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY:translateY.value}]
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
   
    <LinearGradient
       colors={[colorGrade1,colorGrade2]}
       as={RNLinearGradient}>
        <Box w={'100%'} h={'20%'}/>
        <Animated.View style={[animatedStyle]}>
        <Card w={'100%'} h={'90%'} borderTopLeftRadius={30} borderTopEndRadius={30}>
        <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
        <HStack alignSelf='center' justifyContent='space-between'>
          <ServiceButton service="Both" />
          <ServiceButton service="Lunch" />
          <ServiceButton service="Dinner" />
        </HStack>
        {selectedService && <MenuCard />}
    </ServiceContext.Provider>
        </Card>
        </Animated.View>
    </LinearGradient>
   
      
    )
    }
export default Services


const ServiceButton = ({ service }) => {
  const { setSelectedService } = useContext(ServiceContext);

  const handlePress = () => {
    setSelectedService(service);
  };

  return (
    <CustomButton width={'30%'} marginHorizontal={10} borderRadius={30} height={45} bgColor={accentBg} color={textColor} title={service} handlePressEvent={handlePress} />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
});





