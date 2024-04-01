import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GradientButton from '../components/GradientButton';
import { HStack, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter,Button, ButtonText,Heading } from '@gluestack-ui/themed';
import { colorGrade2, dark } from '../constants/Stylesheet';
import firestore from '@react-native-firebase/firestore'


const Card = ({ id, title, content }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const handleDelete = (id) => {
  setSelectedCardId(id);
  setShowAlertDialog(true);
};

const Services = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [data, setData] = useState('')


useEffect(()=>{
  const FetchData = firestore().collection('Packages').doc('packageDetails').onSnapshot(documentSnapshot=>{
    if(documentSnapshot.exists){
     console.log(documentSnapshot.data())
    }
  })
FetchData();
},[])
 

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
    setShowAlertDialog(true); // Show the alert dialog
  };

  const handleAlertDialogClose = () => {
    setShowAlertDialog(false); // Close the alert dialog
  };

 
  const handleConfirmDelete = () => {
    console.log("Deleting card with ID:", selectedCardId);
    setShowAlertDialog(false);
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
          <GradientButton title="Both" onPress={() => handleButtonPress(1)} isSelected={selectedButton === 1} />
          <GradientButton title="Lunch" onPress={() => handleButtonPress(2)} isSelected={selectedButton === 2} />
          <GradientButton title="Dinner" onPress={() => handleButtonPress(3)} isSelected={selectedButton === 3} />
        </HStack>
      </View>
      <View style={styles.cardsContainer}>
      
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

export default Services;

// import React, { useState } from 'react';
// import { View, Switch, Text } from 'react-native';

// const ToggleSwitch = () => {
//   const [isVeg, setIsVeg] = useState(true); // Default to Veg

//   const toggleSwitch = () => {
//     setIsVeg(previousState => !previousState);
//     console.log(`Selected Option: ${!isVeg ? 'Non Veg' : 'Veg'}`);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isVeg ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isVeg}
//       />
//       <Text>{isVeg ? 'Veg' : 'Non Veg'}</Text>
//     </View>
//   );
// };

// export default ToggleSwitch;

{/* <HStack justifyContent="flex-end">
          <HStack alignItems="center">
            <Box justifyContent="center" alignItems="center" style={{width:50,height:50,backgroundColor:'green',borderRadius:50,marginRight:10}}>
            <Icon size={'md'} color={textColor} as={Leaf}/>
            </Box>
          <Switch size="lg" value={isNonVeg}/>
          <Box justifyContent="center" alignItems="center" style={{width:50,height:50,backgroundColor:'red',borderRadius:50}}>
           <Icon size={'md'} color={textColor} as={EggIcon}/>
           </Box>
          </HStack> */}


