import { HStack } from '@gluestack-ui/themed';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { dark } from '../constants/Stylesheet';


const MealMenu = () => {
  // Define your weekly menu
  const weeklyMenu = {
    Monday: {
      lunch: 'Chicken salad',
      dinner: 'Grilled salmon with quinoa',
    },
    Tuesday: {
      lunch: 'Turkey and avocado wrap',
      dinner: 'Vegetable stir-fry with tofu',
    },
    Wednesday: {
      lunch: 'Quinoa salad with roasted vegetables',
      dinner: 'Pasta with marinara sauce',
    },
    Thursday: {
        lunch: 'Chicken salad',
        dinner: 'Grilled salmon with quinoa',
      },
    Friday: {
        lunch: 'Turkey and avocado wrap',
        dinner: 'Vegetable stir-fry with tofu',
      },
    Saturday: {
        lunch: 'Quinoa salad with roasted vegetables',
        dinner: 'Pasta with marinara sauce',
      },
  
  };

  // Get the current day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];

  // Get today's menu from the weeklyMenu
  const todaysMenu = weeklyMenu[currentDay];

  // Render today's menu
  return (
    <View style={styles.container}>
      <CustomText color={dark} fontSize={17.5} fontWeight={600} textAlign={'center'} text={currentDay}/>
      <HStack justifyContent='space-between'>
      <View style={styles.mealSection}>
        <Text style={styles.mealTitle}>Lunch</Text>
        <Text style={styles.meal}>{todaysMenu.lunch}</Text>
      </View>
      <View style={styles.mealSection}>
        <Text style={styles.mealTitle}>Dinner</Text>
        <Text style={styles.meal}>{todaysMenu.dinner}</Text>
      </View>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:5,
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  mealSection: {
    marginBottom:5,
    
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  meal: {
    fontSize: 10,
    color:'black'
  },
});

export default MealMenu;
