import React, { useState, useEffect } from "react";
import { View, Text, Switch, Button, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore'; // Import firestore from react-native-firebase

const ServicePackage = () => {
  const [nonVeg, setNonVeg] = useState(false);
  const [veg, setVeg] = useState(false);
  const [mealType, setMealType] = useState('');

  // Retrieve data from Firestore
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Retrieve data from Firestore based on non-veg and veg options and meal type
    try {
      const data = await firestore().collection('servicePackages').where('isNonVeg', '==', nonVeg).where('isVeg', '==', veg).where('mealType', '==', mealType).limit(5).get();
      // Handle retrieved data
      data.forEach(doc => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createPackage = async () => {
    // Create a new package in Firestore
    try {
      await firestore().collection('servicePackages').add({
        isNonVeg: nonVeg,
        isVeg: veg,
        mealType: mealType,
        // Add other package details as needed
      });
      console.log('Package created successfully');
    } catch (error) {
      console.error('Error creating package:', error);
    }
  };

  const updatePackage = async (packageId) => {
    // Update an existing package in Firestore
    try {
      await firestore().collection('servicePackages').doc(packageId).update({
        isNonVeg: nonVeg,
        isVeg: veg,
        mealType: mealType,
        // Add other fields to update
      });
      console.log('Package updated successfully');
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  return (
    <View>
      <View>
        <Text>Non-Veg:</Text>
        <Switch value={nonVeg} onValueChange={(value) => setNonVeg(value)} />
      </View>
      <View>
        <Text>Veg:</Text>
        <Switch value={veg} onValueChange={(value) => setVeg(value)} />
      </View>
      <View>
        <TouchableOpacity onPress={() => setMealType('both')}>
          <Text>Both Lunch & Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMealType('lunch')}>
          <Text>Lunch Only</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMealType('dinner')}>
          <Text>Dinner Only</Text>
        </TouchableOpacity>
      </View>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Create Package" onPress={createPackage} />
      <Button title="Update Package" onPress={() => updatePackage('packageId')} />
    </View>
  );
};

export default ServicePackage;
