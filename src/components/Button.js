import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constans/colors'

const Button = ({tittle,onPress=()=>{}}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.text}>
            {tittle}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        height:55,
        width:'100%',
        backgroundColor:colors.blue,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20

    },
    text:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:18
    }
})

export default Button