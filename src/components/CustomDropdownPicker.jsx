import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import DropDown from 'react-native-drop-down-mith';

const CustomDropdownPicker = ({dropdownData,handleClick,dropdownPlaceholder,title,width,color,fontWeight}) => {
  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
      <View style={{width: '97%', height: '100%', paddingHorizontal: 10,marginVertical:20}}>
        <View
          style={{width:width,height:50, alignSelf: 'center' ,color:'black'}}>
          <DropDown
            titleStyle={{marginBottom:5, marginLeft: 3, fontWeight:fontWeight, color:'black'}}
            title={title}
            onClick={handleClick}
            placeHolder={dropdownPlaceholder}
            data={dropdownData}
            dropDownStyle={{backgroundColor:'#efefef', marginTop:10, height:200}}
            itemTextStyle={{color:'black',height:150, lineHeight:150}}
            containerStyle={{height:50}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CustomDropdownPicker;