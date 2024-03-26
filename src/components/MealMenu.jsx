import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, Card, HStack, Image, ScrollView, VStack } from '@gluestack-ui/themed';
import CustomText from './CustomText';
import { accentBg, dark } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore'; // Import firestore
import CustomDivider from './CustomDivider';


const WeeklyMenuCollection = firestore().collection('weeklyMenu');

const MealMenu = () => {
  const [todaysMenu, setTodaysMenu] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodaysMenu = async () => {
      try {
        const currentDate = new Date();
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()];
        const snapshot = await WeeklyMenuCollection.doc(currentDay).get();
        if (snapshot.exists) {
          setTodaysMenu(snapshot.data());
        } else {
          console.log('No menu found for', currentDay);
        }
      } catch (error) {
        console.error('Error fetching today\'s menu:', error); // Log error here
      } finally {
        setLoading(false);
      }
    };

    fetchTodaysMenu();
  }, []);
  console.log(todaysMenu.Lunch)

  return (
    <View>
      <CustomText color={dark} fontSize={17.5} fontWeight={600} textAlign={'center'} text={"Today's Menu"} />
      <CustomDivider width={'40%'} height={2} bgColor={accentBg} paddingAxisY={10} alignSelf={'center'}/>
      <HStack justifyContent='space-between'>
        <Card w={'50%'} mr={4}>
        <Text style={{color:dark,fontSize:15.5,fontWeight:'500'}}>Lunch</Text>
          {/* <Image source={{uri:""}} /> */}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
               todaysMenu.Lunch.map((item, index) => (
              <Text style={{color:dark}} key={index}>{item}</Text>
            ))
          )}
        </Card>
       <Card w={'50%'} m={2}>
       <Text style={{color:dark,fontSize:15.5, fontWeight:'500'}}>Dinner</Text>
          {/* <Image source={{uri:""}}/> */}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
             todaysMenu.Dinner.map((item,index) => (
              <Text style={{color:dark}} key={index}>{item}</Text>
            ))
          )}
        </Card>  
       
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  mealSection: {
    marginBottom: 10, // Increase spacing between sections
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5, // Add space below title
  },
  meal: {
    fontSize: 16,
    color: 'black',
  },
});

export default MealMenu;
