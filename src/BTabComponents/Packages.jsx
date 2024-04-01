import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Box, Card, Divider, HStack, LinearGradient, Text } from '@gluestack-ui/themed';
import GradientButton from '../components/GradientButton';
import firestore from '@react-native-firebase/firestore';
import { accentBg, colorGrade1, colorGrade2, textColor } from '../constants/Stylesheet';
import CustomPresable from '../components/CustomPressable';
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';



const Packages = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [packageData, setPackageData] = useState(null);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSnapshot = await firestore()
          .collection('Packages')
          .doc('packageDetails')
          .get();
        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          setPackageData(data);
          console.log(data)
        }
      } catch (error) {
        console.error('Error fetching package details:', error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  const handleButtonPress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <HStack justifyContent="space-between" alignSelf="center" marginBottom={20} style={styles.buttonGroup}>
          <GradientButton title="Student" onPress={() => handleButtonPress(1)} isSelected={selectedButton === 1} />
          <GradientButton title="Corporate" onPress={() => handleButtonPress(2)} isSelected={selectedButton === 2} />
          <GradientButton title="Vendor" onPress={() => handleButtonPress(3)} isSelected={selectedButton === 3} />
        </HStack>
      </View>
      <View style={styles.cardsContainer}>
        {packageData && (
          <Card style={styles.card}>
            <Text style={{textAlign:'center', fontSize:21.5, fontWeight:500}}>{selectedButton === 1 ? 'Student Package' : selectedButton === 2 ? 'Corporate Package' : 'Vendor Package'}</Text>
            <HStack marginTop={30} alignSelf='center'>
              <Text style={{fontSize:60.5, fontWeight:500}}>&#8377;{packageData[selectedButton === 1 ? 'Student' : selectedButton === 2 ? 'Corporate' : 'Vendor'].price}</Text>
              <Divider marginHorizontal={12} width={3} orientation='vertical'/>
              <Text style={{fontSize:30.5,width:100}}>per Month</Text>
            </HStack>
            <Text style={{position:'absolute',bottom:100,left:20}}>{packageData[selectedButton === 1 ? 'Student' : selectedButton === 2 ? 'Corporate' : 'Vendor'].description}</Text>
           <Box style={{position:'absolute'}}  alignSelf='center' bottom={10}>
           <TouchableOpacity onPress={()=>navigation.navigate('MenuPrompt')}>
            <LinearGradient style={{width:150,height:50,borderRadius:50}} colors={[colorGrade1,colorGrade2]} as={RNLinearGradient}>
             <Text style={{textAlign:'center'}} lineHeight={50} color={textColor} alignSelf='center'>Proceed</Text>
            </LinearGradient>
           </TouchableOpacity>
           </Box>
          </Card>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
   width:'100%',
   height:500
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardsContainer: {
    width: '90%',
  },
  buttonGroup: {
    width: '95%',
    height: 50,
    borderRadius: 50,
    backgroundColor:colorGrade2
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
