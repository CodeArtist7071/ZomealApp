import { Box, Spinner } from '@gluestack-ui/themed'
import React from 'react'
import { accentBg, textColor } from '../constants/Stylesheet'



const CustomSpinner = ()=>{
return(
<Box flex={1} justifyContent='center' alignContent='center' bgColor='black' opacity={.6} >
<Box w={'100%'} style={{position:'absolute',justifyContent:'center', alignItems:'center'}}>
    <Spinner style={{marginHorizontal:'auto'}} size={'xl'} color={textColor}/>
</Box>
</Box>

)
}
export default CustomSpinner