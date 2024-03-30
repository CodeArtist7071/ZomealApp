import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GradientButton from '../components/GradientButton';
import { HStack } from '@gluestack-ui/themed';
import { colorGrade2 } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore';

const Card = ({ title, content }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const Packages = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSnapshot = await firestore().collection('Packages').doc('packageDetails').get();
        if (documentSnapshot.exists) {
          const subscriptionData = documentSnapshot.data();
          setPackageData(subscriptionData);
          console.log(subscriptionData)
        }
      } catch (error) {
        console.error('Error fetching package details:', error);
      }
    };
    fetchData();
  }, []);

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <HStack justifyContent='space-between' alignSelf='center' marginBottom={20} style={{
          width: '95%',
          height: 50,
          borderRadius: 50,
          backgroundColor: colorGrade2
        }}>
          <GradientButton title="Standard" onPress={() => handleButtonPress(1)} isSelected={selectedButton === 1} />
          <GradientButton title="Corporate" onPress={() => handleButtonPress(2)} isSelected={selectedButton === 2} />
          <GradientButton title="Vendor" onPress={() => handleButtonPress(3)} isSelected={selectedButton === 3} />
        </HStack>
      </View>
      <View style={styles.cardsContainer}>
        {packageData && (
          <Card
            title={selectedButton === 1 ? 'Student Package' : selectedButton === 2 ? 'Corporate Package' : selectedButton === 3 ? 'Vendor Package':'none'}
            content={selectedButton === 1 ? packageData.studentPackage.description : selectedButton === 2 ? packageData.corporatePackage.description : selectedButton === 3 ? packageData.vendorPackage.description : ''}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  cardsContainer: {
    width: '80%'
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  cardTitle: {
    fontWeight: 'bold'
  }
});

export default Packages;
