import React, { useState } from 'react';
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

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  function handlePincodeEvent(){
      console.log('Checking')
      navigation.navigate('PackagePrompt')  
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
     
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search your Pincode...."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <CustomIcon icons={LucideWallet2} size={'xl'} />
        
        )}
      />
      <CustomText width={'95%'} paddingAxisY={30} height={120} color={dark} textAlign={'center'} text={'Ensuring seamless delivery by confirming your location'}/>
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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