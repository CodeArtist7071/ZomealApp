import { Input,InputField,InputIcon,InputSlot } from "@gluestack-ui/themed";
import React from "react";
const CustomInput = ({size,variant,width,fontSize,padding,inputFieldColor,InputSlotbackgroundColor,bgColor,keyboardType,type,handleChangeText,placeholder,value, ...props})=> {
    return(
        <Input  size={size} variant={variant}>
        <InputField  $focus-bg='white' style={{width:width,fontSize:fontSize, color:inputFieldColor, backgroundColor:bgColor}} keyboardType={keyboardType} type={type} onChangeText={handleChangeText} placeholder={placeholder} value={value} {...props}/>
        <InputSlot style={{backgroundColor:InputSlotbackgroundColor}} p={padding}>
          <InputIcon/>
        </InputSlot>
      </Input>
    )
}
export default CustomInput