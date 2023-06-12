import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Settings, Perfil } from '../screens';
import { ROUTES } from '../constans';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View,SafeAreaView, Animated } from 'react-native';
import colors from '../constans/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveTintColor:colors.blue,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:colors.white,
                position:'absolute',
                bottom:30,
                marginHorizontal:20,

                height:60,
                borderRadius:10,

                shadowColor:'#000',
                shadowOpacity:0.06,
                shadowOffset:{
                    width:10,
                    height:10
                }
            },
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
                let iconName;

                if (route.name == ROUTES.HOME) {
                    iconName = focused ? 'home-sharp' : 'home-outline'
                } else if (route.name == ROUTES.SETTINGS) {
                    iconName = focused ? 'settings' : 'settings-outline'
                }
                else if (route.name == ROUTES.PERFIL) {
                    iconName = focused ? 'person' : 'person-outline'
                }
                return <Icon name={iconName} size={22} color={color} />
            }
        })}>
            <Tab.Screen name={ROUTES.HOME} component={Home}></Tab.Screen>
            <Tab.Screen name={ROUTES.SETTINGS} component={Settings}></Tab.Screen>
            <Tab.Screen name={ROUTES.PERFIL} component={Perfil}></Tab.Screen>
        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:colors.white,
        borderRadius:15
    }
})

export default BottomTabNavigator