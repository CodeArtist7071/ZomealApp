import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth,{firebase,FirebaseAuthTypes} from '@react-native-firebase/auth'; // Import User type from react-native-firebase
import LoginRedirect from "../screens/LoginRedirect";
import Dashboard from "../screens/Dashboard";
import PhoneSignIn from "../auth/PhoneSign";
import AddAddress from "../screens/AddAddress";
import BottomNavigation from "./BottomNavigation";
import { Balance, Calories } from "../components/CalAction";
import CustomSpinner from "../components/CustomSpinner";
import CalActionNMore from "../screens/CalActionNMore";
import SubscriptionPrompt from "../screens/SubscriptionPrompt";
import Settings from "../screens/Settings";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Subscription from "../screens/Subscription";
import FAQ from "../screens/FAQ";
import Report from "../screens/Report";
import Feedback from "../screens/Feedback";
import { UserProvider } from "../context/UserContext";
import CancelService from "../screens/CancelService";
import PincodePrompt from "../screens/PincodePrompt"
import AddressPrompt from "../screens/AddressPrompt"
import { Package } from "lucide-react-native";
import PackagePrompt from "../screens/PackagePrompt";
import MenuPrompt from "../screens/MenuPrompt";

const Stack = createNativeStackNavigator();
type User = FirebaseAuthTypes.User | null;
const AppNavigator = () => {
    const [user, setUser] = useState<User>(null); // Define user state with User | null type

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => { // Use auth() to access authentication methods
      return setUser(user); // Set the user state based on authentication state
    });

    // Cleanup function
    return unsubscribe;
  }, []);

  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // If user is authenticated, show the Dashboard and other screens
          <>
          <Stack.Screen component={PincodePrompt} name="PincodePrompt" options={{headerTransparent:true,headerTitle:''}}/>
          <Stack.Screen
              component={Dashboard}
              name="Dashboard"
              options={{ headerShown: false }}
            />
            <Stack.Screen component={BottomNavigation} name="Tabs" />
            <Stack.Screen component={Balance} name="Balance" />
            <Stack.Screen component={Calories} name="Calories" />
            <Stack.Screen
              component={AddAddress}
              name="Address"
              options={{ headerShown: true, headerShadowVisible: true }}
            />
            <Stack.Screen component={AddressPrompt} name="AddressPrompt"/>
            <Stack.Screen component={PackagePrompt} name="PackagePrompt" options={{headerTitle:'',headerTransparent:true}}/>
            <Stack.Screen component={MenuPrompt} name="MenuPrompt"/>
            <Stack.Screen component={Settings} name="Settings" />
            <Stack.Screen component={Profile} name="Profile" />
            <Stack.Screen component={CancelService} name="Cancel Service"/>
            <Stack.Screen
              component={Subscription}
              name="Subscription"
            />
            <Stack.Screen
              component={FAQ}
              name="Frequently Asked Questions"
            />
            <Stack.Screen component={Report} name="Report" />
            <Stack.Screen component={Feedback} name="Feedback" />
            <Stack.Screen component={Notification} name="Notify" />

          </>
        ) : (
          // If user is not authenticated, show the LoginRedirect and Sign In screens
          <>
            <Stack.Screen
              component={LoginRedirect}
              name="LoginRedirect"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={PhoneSignIn}
              name="Sign In"
              options={{ headerTransparent: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};

export default AppNavigator;
