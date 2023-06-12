import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}


