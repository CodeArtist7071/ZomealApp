import { Box, Card, Switch, Text } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import CustomSwitch from "../components/CustomSwitch";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs"
import { accentBg, dark } from "../constants/Stylesheet";


const MenuPrompt=()=>{
    const [isNonVeg,setIsNonVeg] = useState(false)
    const [chosenDate,setChosenDate] = useState()
    const [date, setDate] = useState(new Date());
    

    useEffect(()=>{},[])

    return(
    <Box>
        <Card style={{backgroundColor:accentBg}}>
        <Switch size="lg" value={isNonVeg}/>
        <DateTimePicker calendarTextStyle={{color:dark}}
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
        timePicker={true}
      />
        </Card>

    </Box>
    )
}
export default MenuPrompt