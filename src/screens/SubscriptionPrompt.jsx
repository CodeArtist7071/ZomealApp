
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { accentBg, dark } from '../constants/Stylesheet';
import { ScrollView } from '@gluestack-ui/themed';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';


const Card = ({ id, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <Text>{id}</Text>
    </TouchableOpacity>
  );
};

const SubscriptionPrompt = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (id) => {
    setSelectedCard(id);
  };

  const handleSave = () => {
    alert(`Selected Card ID: ${selectedCard}`);
  };

  return (
    <ScrollView >
        <View style={styles.container}>
          <CustomText text={'Select your preferred package'} paddingAxisY={'$6'} textAlign={'left'} color={dark} fontSize={17.5} />
        <Card id={1} selected={selectedCard === 1} onPress={() => handleCardPress(1)} />
      <Card id={2} selected={selectedCard === 2} onPress={() => handleCardPress(2)} />
      <Card id={3} selected={selectedCard === 3} onPress={() => handleCardPress(3)} />
      <CustomButton title={'confirm'} height={50} alignSelf={'center'} width={'70%'} bgColor={accentBg} borderRadius={50} handlePressEvent={handleSave}/>
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:100
  },
  card: {
    width:'90%',
    height:300,
    backgroundColor: '#ccc',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  selected: {
    backgroundColor:'#ccc',
    borderColor:accentBg,
    borderWidth:3
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default SubscriptionPrompt