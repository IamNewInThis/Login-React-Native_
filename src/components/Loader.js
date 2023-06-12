import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../constans/colors';

const Loader = ({ visible = true }) => {
    const { height, width } = useWindowDimensions();
    return (
        visible && (
            <View style={[styles.container, {height,width}]}>
                <View style={styles.loader}>
                    <ActivityIndicator size={'large'} color={colors.blue}></ActivityIndicator>
                    <Text style={{marginRight:10,fontSize:16,}}>Cargando...</Text>
                </View>
            </View>)
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    loader:{
        height:70,
        backgroundColor:colors.white,
        marginHorizontal:50,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20, 
    }
})

export default Loader