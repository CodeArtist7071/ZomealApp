import { FormControlError, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel,FormControlLabelText,FormControlErrorIcon,AlertCircleIcon, Input, InputSlot, Text, Box } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import { FormControl } from "@gluestack-ui/themed";
import { StyleSheet, TextInput } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { textColor } from "../constants/Stylesheet";




const CustomOtpfield=({value,onChangeText,helperText,labelText,labelFontSize,isInvalid,size,fontSize,inputFieldColor,errorText,keyboardType,labelFontWeight,labelColor,bgColor,type,placeholder,onfilled,...props})=>{
return(
    <OtpInput
  numberOfDigits={6}
  value={value}
  focusColor="green"
  focusStickBlinkingDuration={500}
  onTextChange={onChangeText}
  onFilled={onfilled}
  theme={{
    width:'100',
   containerStyle: styles.container,
   inputsContainerStyle: styles.inputsContainer,
   pinCodeContainerStyle: styles.pinCodeContainer,
   pinCodeTextStyle: styles.pinCodeText,
   focusStickStyle: styles.focusStick,
   focusedPinCodeContainerStyle: styles.activePinCodeContainer
  }}
/>
)
}
export default CustomOtpfield
const styles = StyleSheet.create({
 container:{
  width:"90%",
  
 },
 inputsContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignSelf:'center',
 },
  pinCodeContainer:{
  width:50,
  height:50,
  backgroundColor:textColor
 }
})