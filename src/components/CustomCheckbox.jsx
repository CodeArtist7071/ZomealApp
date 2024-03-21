import { Text, Center, Box, Icon, } from '@gluestack-ui/themed';
import React from 'react-native';
Box;
const CustomCheckbox = ({
    text, fontWeight,name,size
}) => {
    return <Box flex={'$1'} display='flex'>
        <Icon as={name} size={size} name={"CheckIcon"} />
        <Text size={size} fontWeight={fontWeight}>
            {text}
        </Text>
    </Box>;
};
export default CustomCheckbox;