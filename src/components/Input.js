import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import colors from '../constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({ label,
    iconName,
    password,
    error,
    onFocus = () => { }, ...props }) => {

    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer,
            {
                borderColor: error
                    ? colors.red
                    : isFocused
                        ? colors.darkBlue
                        : colors.light
            }]}>
                <Icon name={iconName} style={{ fontSize: 22, color: colors.darkBlue, marginRight: 10 }}></Icon>

                {/******************** INPUT *********************/}
                <TextInput
                    secureTextEntry={hidePassword}
                    maxLength={30}
                    autoCapitalize='none'
                    autoCorrect={false}

                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}

                    onBlur={() => {
                        setIsFocused(false);
                    }}

                    style={{ color: colors.black, flex: 1 }} {...props}>

                </TextInput>
                {/******************** icon show password *********************/}
                {password && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                        style={{ fontSize: 22, color: colors.darkBlue }}>
                    </Icon>
                )}
            </View>
            {/******************** ERROR *********************/}
            {error && (
                <Text style={{ color: colors.red, fontSize: 12, marginTop:7 }}>
                    {error}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: colors.grey,
    },
    inputContainer: {
        height: 55,
        backgroundColor: colors.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center'
    },
    icon: {
        fontSize: 22,
        color: colors.darkBlue,
        marginRight: 10,
    }
})

export default Input
