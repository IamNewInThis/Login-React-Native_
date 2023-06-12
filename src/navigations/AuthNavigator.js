
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Login,ForgotPassword,Register,Home} from '../screens';
import {ROUTES,COLORS} from '../constans';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();

function AuthNavigator (){
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor:COLORS.white,
      headerBackTitleVisible:false, /*quita el nombre de back en IOS*/
      headerShown:false,
      headerStyle:{backgroundColor: COLORS.primary}
      
    }} initialRouteName={ROUTES.LOGIN}>
        <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name={ROUTES.LOGIN} component={Login}></Stack.Screen>
        <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthNavigator;

  