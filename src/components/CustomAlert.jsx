import { Alert, AlertIcon, AlertText } from "@gluestack-ui/themed";
import { InfoIcon } from "lucide-react-native";
import React from "react";

const CustomAlert = ({mx,action,variant,text})=>{
return(
    <Alert mx={mx}  action={action} variant={variant} >
    <AlertIcon as={InfoIcon} mr="$3"  />
    <AlertText>
     {text}
    </AlertText>
  </Alert>

)
}
export default CustomAlert