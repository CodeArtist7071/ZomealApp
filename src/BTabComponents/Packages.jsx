import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomText from '../components/CustomText';
import { Card, HStack, ScrollView, Text } from '@gluestack-ui/themed';
import { accentBg, dark, textColor } from '../constants/Stylesheet';
import CustomCard from '../components/CustomCard';


const Packages = () => {
  // const [packages, setPackages] = useState();
  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection('Packages')
  //     .onSnapshot(querySnapshot => {
  //       const data = [];
  //       querySnapshot.forEach(documentSnapshot => {
  //         const { type,vegDay,nonVegDay,description } = documentSnapshot.data();
  //         data.push({
  //           id: documentSnapshot.id,
  //           type,
  //           vegDay,
  //           nonVegDay,
  //           description
  //         });
  //       });
  //       setPackages(data);
  //     });

  //   // Unsubscribe from snapshot listener when component unmounts
  //   return () => unsubscribe();
  // }, []);

  // const renderPackage = ({ item }) => (
  //   <Card width={'95%'} height={250} alignSelf='center' style={{marginBottom:40}}>
  //       <CustomText textAlign={'center'} fontSize={20} color={dark} text={item.type}/>
  //       <CustomText text={item.price}/>
  //       <CustomText text={item.vegDay}/>
  //       <CustomText text={item.nonVegDay}/>
  //       <CustomText text={item.description}/>
  //  </Card>
  // );

  return (
    // <View style={{marginTop:100}}>
    //   <FlatList
    //     data={packages}
    //     renderItem={renderPackage}
    //     keyExtractor={item => item.id}
    //   />
    // </View>
    <View style={{width:'95%',marginTop:50, alignSelf:'center'}}>
            <ScrollView>
              <View  style={{width:'50%',height:100,borderBottomColor:accentBg, borderBlockColor:textColor}}>
              <CustomText paddingAxisY={15} fontSize={21.5} textAlign={'center'} color={dark} text={'Student Package'}/>
              </View>
              <Text style={{marginVertical:20}}>Main Course</Text>
              <ScrollView horizontal paddingBottom={10}>
                <Card marginRight={10} style={{width:200,height:150}}></Card>
                <Card style={{width:200,height:150}}></Card>
                <Card style={{width:200,height:150}}></Card>
                <Card style={{width:200,height:150}}></Card>
              </ScrollView>
            </ScrollView>
    </View>
            
  );
};

export default Packages;
