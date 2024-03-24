import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HStack, Image, VStack } from '@gluestack-ui/themed';
import CustomText from './CustomText';
import { dark } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore'; // Import firestore

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
    <View style={styles.container}>
      <CustomText color={dark} fontSize={17.5} fontWeight={600} textAlign={'center'} text={"Today's Menu"} />
      <VStack justifyContent='space-between'>
        <View style={styles.mealSection}>
          <Text style={styles.mealTitle}>Lunch</Text>
          {/* <Image source={{uri:""}} /> */}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            todaysMenu.Lunch.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))
          )}
        </View>
        <View style={styles.mealSection}>
          <Text style={styles.mealTitle}>Dinner</Text>
          {/* <Image source={{uri:""}}/> */}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            todaysMenu.Dinner.map((item,index) => (
              <Text key={index}>{item}</Text>
            ))
          )}
        </View>
      </VStack>
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
