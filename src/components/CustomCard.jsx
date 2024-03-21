import { Card, Heading, Text,Box } from "@gluestack-ui/themed";
const CustomCard=({cardHeadingText, cardText, cardHeight, cardWidth, cardAlignitems,cardJustifyContent, cardHeadingColor,cardTextColor,CardBgColor})=>{
return(
  <Box flex={1} justifyContent="center" alignItems="center">
     <Card h={cardHeight} w={cardWidth} justifyContent={cardJustifyContent} bgColor={CardBgColor} alignItems={cardAlignitems} size="md" variant="elevated"  m="$3">
      <Heading color={cardHeadingColor} mb="$1" size="md">
        {cardHeadingText}
      </Heading>
      <Text color={cardTextColor} size="sm">{cardText}</Text>
    </Card>
  </Box>
    )
}
export default CustomCard