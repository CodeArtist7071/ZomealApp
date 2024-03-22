import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomText from '../components/CustomText';
import { Card, ScrollView, Text } from '@gluestack-ui/themed';
import { dark } from '../constants/Stylesheet';
import CustomCard from '../components/CustomCard';



const Packages = () => {
  const [packages, setPackages] = useState();
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Packages')
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          const { type,vegDay,nonVegDay,description } = documentSnapshot.data();
          data.push({
            id: documentSnapshot.id,
            type,
            vegDay,
            nonVegDay,
            description
          });
        });
        setPackages(data);
      });

    // Unsubscribe from snapshot listener when component unmounts
    return () => unsubscribe();
  }, []);

  const renderPackage = ({ item }) => (
    <Card width={'95%'} height={250} alignSelf='center' style={{marginBottom:40}}>
        <CustomText textAlign={'center'} fontSize={20} color={dark} text={item.type}/>
        <CustomText text={item.price}/>
        <CustomText text={item.vegDay}/>
        <CustomText text={item.nonVegDay}/>
        <CustomText text={item.description}/>
   </Card>
  );

  return (
    <View style={{marginTop:100}}>
      <FlatList
        data={packages}
        renderItem={renderPackage}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Packages;
