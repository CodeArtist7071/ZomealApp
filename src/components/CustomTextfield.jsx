import { FormControl, FormControlError,FormControlErrorIcon,FormControlErrorText, AlertCircleIcon, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, InputField,Text,Input,InputSlot } from "@gluestack-ui/themed";
const CustomTextfield=({type,width,countryCodeColor, errorText,isDisabled, labelText,handleChangeText,placeholder,inputFieldColor, helperText,keyboardType,size,fontSize,labelFontSize, labelFontWeight,value,bgColor,isInvalid,labelColor,variant,InputSlotbackgroundColor,padding,countryCode,isRequired, ...props})=>{
return(
<FormControl px='$6' isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
    <FormControlLabel py={'$.5'} ml={'$1.5'}>
       <FormControlLabelText fontWeight={labelFontWeight} fontSize={labelFontSize} color={labelColor}>{labelText}</FormControlLabelText>
    </FormControlLabel>
    <Input size={size} variant={variant}>
     <InputSlot style={{backgroundColor:InputSlotbackgroundColor}} px={padding}>
     <Text style={{color:countryCodeColor}}>{countryCode}</Text>
     </InputSlot>   
    <InputField  $focus-bg='white' style={{width:width,fontSize:fontSize, color:inputFieldColor, backgroundColor:bgColor}} keyboardType={keyboardType} type={type} onChangeText={handleChangeText} placeholder={placeholder} value={value} {...props}/>
    </Input>
    <FormControlHelper>
            <FormControlHelperText>{helperText}</FormControlHelperText>
    </FormControlHelper>
    <FormControlError>
      <FormControlErrorIcon as={AlertCircleIcon} />
      <FormControlErrorText>
       {errorText}
      </FormControlErrorText>
    </FormControlError>
</FormControl>
)
}
export default CustomTextfield