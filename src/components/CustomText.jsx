import { Text, Box } from "@gluestack-ui/themed"
const CustomText = ({text,fontSize,color,width,height,fontWeight,justifyContent,textAlign,paddingAxisY,paddingTop,paddingBottom,marginLeft})=>{
return(
    <Box  w={width}
    h={height}>
    <Text 
    pt={paddingTop} 
    pb={paddingBottom} 
    py={paddingAxisY}
    ml={marginLeft}
    
    style={{
        fontSize:fontSize,
        color:color,
        fontWeight:fontWeight,
        justifyContent:justifyContent,
        textAlign:textAlign,
         }}>{text}</Text>
   </Box>
)
}
export default CustomText