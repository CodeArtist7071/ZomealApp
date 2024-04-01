import { Text, Center, Box, Icon, Checkbox,CheckboxIndicator,CheckboxIcon,CheckboxLabel } from '@gluestack-ui/themed';
import React from 'react-native';
Box;
const CustomCheckbox = ({
    size,as,isDisabled,isInvalid,label
}) => {
    return (
        <Checkbox aria-label='check'  size={size} isInvalid={isInvalid} isDisabled={isDisabled}   >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={as}/>
        </CheckboxIndicator>
        <CheckboxLabel>{label}</CheckboxLabel>
      </Checkbox>
    )
   

};
export default CustomCheckbox;
