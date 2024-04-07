import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native';
import CustomIcon from '../components/CustomIcons';
import { ArrowBigRight, ArrowBigRightIcon, ArrowRight, Box, LucideWallet2, Wallet, Wallet2Icon } from 'lucide-react-native';
import CustomButton from '../components/CustomButton';
import { accentBg, colorGrade1, colorGrade2, dark, textColor } from '../constants/Stylesheet';
import CustomButtonIcon from '../components/CustomIconButton';
import {ButtonIcon, Card, HStack, Icon, LinearGradient, Pressable } from '@gluestack-ui/themed';
import CustomText from '../components/CustomText';
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';
import CustomDivider from '../components/CustomDivider';
import firestore from "@react-native-firebase/firestore"
import CustomTextfield from '../components/CustomTextfield';




const DropdownComponent = ({route,navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [localities,setLocalities] = useState('')
  const [pincodeSearch,setPincodeSearch] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [pincodeValid, setPincodeValid] = useState(false)
  const [PincodeData, setPincodeData] = useState(null)



  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnapshot = await firestore()
          .collection('Localities')
          .where('value', '==', pincodeSearch)
          .get();
        if (!docSnapshot.empty) {
          // Pincode found
          const data = docSnapshot.docs.map(doc => doc.data());
          setPincodeData(data[0]); // Assuming there's only one document per pincode
          setPincodeValid(true);
          console.log('data:',data)
        } else {
          // Pincode not found
          setPincodeValid(false);
          setPincodeData(null);
        }
      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    };

    if (pincodeSearch) {
      fetchData();
    }
  }, [pincodeSearch]);





  console.log('pincodeResult', pincodeSearch)


  function handlePincodeResult(pincodeSearch){
      setPincodeSearch(pincodeSearch)
  }
  function handlePincodeEvent(){
    if (pincodeValid) {
      // Pincode found, navigate to success screen or show success alert
     navigation.navigate('AddressPrompt')
      // navigation.navigate('SuccessScreen');
    } else {
      // Pincode not found, show error alert or message
      Alert.alert('Error', 'Pincode not found. Please enter a valid pincode.');
    }
  }
  return (
    <LinearGradient
    as={RNLinearGradient}
    colors={[colorGrade1,colorGrade2]}
    flex={1}
    >
 
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
    <CustomText textAlign={'center'} fontSize={18.5} fontWeight={600} height={40} color={textColor} text={'Verify Pincode'}/>
    <CustomText width={'100%'} fontSize={14.5} height={30} color={textColor} textAlign={'center'} text={'Instantly check if we deliver to your area.'}/>
    <CustomDivider width={'65%'} bgColor={textColor} height={1} alignSelf={'center'}/>
    <Card style={{width:'95%',height:200,marginTop:20,alignSelf:'center',borderRadius:10}}>
     
    <CustomTextfield size={'lg'} fontSize={15.5} inputFieldColor={dark} keyboardType={'numeric'} handleChangeText={handlePincodeResult} placeholder={'Search your Pincode'}/> 
    <CustomText width={'95%'} paddingAxisY={10} height={120} color={dark} textAlign={'center'} text={'Ensuring seamless delivery by confirming your location'}/>
     </Card>
     <Pressable disabled={!pincodeSearch} onPress={handlePincodeEvent}>
     <HStack style={{justifyContent:'center',alignSelf:'center',marginTop:-30}}>
      <Card style={{width:60,height:60, borderRadius:50,justifyContent:'center',alignContent:'center'}} backgroundColor={pincodeValid ? accentBg: 'grey'}>
      <Icon color={textColor} size={'xl'} as={ArrowRight} />
      </Card>
      </HStack>
     </Pressable>
     
    </View>
    </LinearGradient>

    
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color:'black',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color:'black'
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'black'
  },
});