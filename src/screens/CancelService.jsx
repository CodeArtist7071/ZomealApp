import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Switch } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DateTimePicker from 'react-native-ui-datepicker';


const CancelService = () => {
  const [skipLunch, setSkipLunch] = useState(false);
  const [skipDinner, setSkipDinner] = useState(false);
  const [skipBoth, setSkipBoth] = useState(false);
  const [dates, setDates] = useState(new Date().getDate);

  useEffect(() => {
    const fetchServiceSettings = async () => {
      try {
        const userId = 'dIOKY0jv3IGlzNIbrY9B'; // Replace with actual user ID
        const userDoc = await firestore().collection('Users').doc(userId).get();
        const serviceSettings = userDoc.data()?.Service;

        // Update state based on the retrieved service settings
        if (serviceSettings) {
          setSkipLunch(serviceSettings.skipLunch || false);
          setSkipDinner(serviceSettings.skipDinner || false);
          setSkipBoth(serviceSettings.skipBoth || false);
        }
      } catch (error) {
        console.error('Error fetching service settings:', error);
      }
    };

    fetchServiceSettings();
  }, []);

  const saveServiceSettings = async () => {
    try {
      const userId = 'dIOKY0jv3IGlzNIbrY9B'; // Replace with actual user ID
      await firestore().collection('Users').doc(userId).set({
        Service: {
          skipLunch: skipLunch,
          skipDinner: skipDinner,
          skipBoth: skipBoth
        }
      }, { merge: true });
      console.log('Service settings saved successfully.');
    } catch (error) {
      console.error('Error saving service settings:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skip Meals</Text>
      <View style={styles.option}>
        <Text>skip Lunch</Text>
        <Switch value={skipLunch} onValueChange={setSkipLunch} />
      </View>
      <View style={styles.option}>
        <Text>skip Dinner</Text>
        <Switch value={skipDinner} onValueChange={setSkipDinner} />
      </View>
      <View style={styles.option}>
        <Text>skip Both</Text>
        <Switch value={skipBoth} onValueChange={setSkipBoth} />
      </View>
      <Text style={styles.header}>Select Dates</Text>
      <DateTimePicker
        mode='multiple'
        dates={dates}
        onChange={(params) => setDates(params.dates)}
      />
      <Button title="Save" onPress={saveServiceSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default CancelService;
