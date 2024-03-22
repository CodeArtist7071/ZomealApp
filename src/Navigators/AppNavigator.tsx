import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginRedirect from "../screens/LoginRedirect";
import Dashboard from "../screens/Dashboard";
import PhoneSignIn from "../auth/PhoneSign"
import AddAddress from "../screens/AddAddress";
import BottomNavigation from "./BottomNavigation";
import { Balance, Calories } from "../components/CalAction";
import CustomSpinner from "../components/CustomSpinner";
import CalActionNMore from "../screens/CalActionNMore";
import PincodePrompt from "../screens/PincodePrompt";
import SubscriptionPrompt from "../screens/SubscriptionPrompt";
const Stack=createNativeStackNavigator();
const AppNavigator= () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={LoginRedirect} name="LoginRedirect" options={{headerShown:false}}/>
                <Stack.Screen component={PhoneSignIn} name="Sign In" options={{headerTransparent:true}}/>
                <Stack.Screen component={Dashboard} name="Dashboard" options={{headerShown:false}}/>
                <Stack.Screen component={BottomNavigation} name="Tabs"/>
                <Stack.Screen component={Balance} name="Balance"/>
                <Stack.Screen component={Calories} name="Calories"/>
                <Stack.Screen component={AddAddress} name="Add Address" options={{headerShown:true, headerShadowVisible:true}}/>
            </Stack.Navigator>
        </NavigationContainer>
            
    )

};

export default AppNavigator;


