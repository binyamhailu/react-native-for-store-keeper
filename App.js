import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen'
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {

  return (
    <>
{/* <OfflineNotice></OfflineNotice> */}
  <NavigationContainer theme={navigationTheme} >
    <AppNavigator></AppNavigator>
  </NavigationContainer> 
  </>

  )
}
