import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CustomIcon from '../components/CustomIcons';
import { ArrowBigRight, ArrowBigRightIcon, ArrowRight, Box, LucideWallet2, Wallet, Wallet2Icon } from 'lucide-react-native';
import CustomButton from '../components/CustomButton';
import { accentBg, colorGrade1, colorGrade2, dark, textColor } from '../constants/Stylesheet';
import CustomButtonIcon from '../components/CustomIconButton';
import { ButtonIcon, Card, HStack, Icon, LinearGradient, Pressable } from '@gluestack-ui/themed';
import CustomText from '../components/CustomText';
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';
import CustomDivider from '../components/CustomDivider';
import firestore from "@react-native-firebase/firestore"
import CustomDropdownPicker from '../components/CustomDropdownPicker';
import CustomTextfield from '../components/CustomTextfield';



const DropdownComponent = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [localities,setLocalities] = useState('')
  const [pincodeSearch,setPincodeSearch] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  


useEffect(()=>{
  try{
    const fetchingData= async()=>{
      const docRef = await firestore().collection('Localities').get();
      const docData = docRef.docs.map(doc=>({id:0,...doc.data()}))
      setPincodeSearch(docData)
      console.log('user:',docData)
     }
     fetchingData();
  }catch(error){
    console.log('Error in pincode fetching:',error)
  }
 

},[])


  console.log('pincodeResult', pincodeSearch)


  function handlePincodeResult(pincodeSearch){
      setPincodeSearch(pincodeSearch)
  }
  function handlePincodeEvent(){
   console.log(pincodeSearch)
   navigation.navigate('OrderDetails')
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
     <Pressable onPress={handlePincodeEvent}>
     <HStack style={{justifyContent:'center',alignSelf:'center',marginTop:-30}}>
      <Card style={{width:60,height:60, borderRadius:50,backgroundColor:accentBg,justifyContent:'center',alignContent:'center'}}>
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