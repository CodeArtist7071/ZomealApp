import { Divider, Box } from '@gluestack-ui/themed'
import React from 'react'

const CustomDivider=({width,height,justifyContent,alignSelf,bgColor,borderColor,paddingAxisY,marginLeft})=>{
return(
    <Box py={paddingAxisY}>
       <Divider 
           width={width} 
           height={height} 
           justifyContent={justifyContent} 
           alignSelf={alignSelf}
           borderColor={borderColor}
           bgColor={bgColor}
           marginLeft={marginLeft}
           />
    </Box>
       
)
}
export default CustomDivider