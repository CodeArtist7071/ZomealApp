import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// JSON data for meal options
const mealOptions = {
  veg: {
    lunch: ['Veg Curry', 'Dal', 'Rice', 'Chapati', 'Salad', 'Yogurt'],
    dinner: ['Veg Curry', 'Dal', 'Rice', 'Chapati'],
  },
  nonVeg: {
    lunch: ['Chicken Curry', 'Rice', 'Chapati', 'Salad', 'Yogurt'],
    dinner: ['Fish Curry', 'Rice', 'Chapati'],
  },
};

const MealSelector = ({navigation}) => {
  const [isVeg, setIsVeg] = useState(true); // Default to veg
  const [selectedMealOption, setSelectedMealOption] = useState(null);

  const handleToggle = () => {
    setIsVeg(!isVeg);
  };

  const handleMealOptionSelect = (option) => {
    setSelectedMealOption(option);
  };

  const handleProceed = () => {
    // Save user preferences
    navigation.navigate('OrderDetails')
    console.log('User preferences:', {
      isVeg: isVeg ? 'Veg' : 'Non-Veg',
      selectedMealOption,
    });
    // Proceed to the next screen or perform any other action
  };

  // Render meal options based on user selection
  const renderMealOptions = () => {
    if (!selectedMealOption) return null;

    let options = [];

    if (selectedMealOption === 'both') {
      const lunchOptions = mealOptions[isVeg ? 'veg' : 'nonVeg']['lunch'];
      const dinnerOptions = mealOptions[isVeg ? 'veg' : 'nonVeg']['dinner'];
      options = [...lunchOptions, ...dinnerOptions];
    } else {
      options = mealOptions[isVeg ? 'veg' : 'nonVeg'][selectedMealOption];
    }

    return options.map((option, index) => (
      <Text key={index} style={styles.optionText}>{option}</Text>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Text style={styles.toggleText}>{isVeg ? 'Veg' : 'Non-Veg'}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedMealOption === 'both' && styles.selectedButton]}
          onPress={() => handleMealOptionSelect('both')}
        >
          <Text style={styles.buttonText}>Both Lunch and Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedMealOption === 'lunch' && styles.selectedButton]}
          onPress={() => handleMealOptionSelect('lunch')}
        >
          <Text style={styles.buttonText}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedMealOption === 'dinner' && styles.selectedButton]}
          onPress={() => handleMealOptionSelect('dinner')}
        >
          <Text style={styles.buttonText}>Dinner</Text>
        </TouchableOpacity>
      </View>
      {/* Render selected meal options */}
      <View style={styles.mealOptionsContainer}>
        {selectedMealOption && renderMealOptions()}
      </View>
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  mealOptionsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  proceedButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealSelector;
