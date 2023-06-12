import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Keyboard,
    Alert
} from 'react-native';
import COLORS from '../../constans/colors';
import ROUTES from '../../constans/routes';
import Button from '../../components/Button';
import colors from '../../constans/colors';
import Input from '../../components/Input'
import Loader from '../../components/Loader';

const Login = (props) => {
    const { navigation } = props;

    const [inputs, setInputs] = React.useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({});

    const [loading,setLoading] = React.useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        {/******************** EMAIL VALIDATION*********************/}
        if (!inputs.email) {
            handleError('Por Favor Ingresa tu Email','email')
            valid = false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Por Favor Ingresa Email Valido','email')
        }

        {/******************** PASSWORD VALIDATION*********************/}
        if (!inputs.password) {
            handleError('Por Favor Ingresa tu Contraseña','password')
            valid = false;
        }else if(inputs.password.length < 5){
            handleError('Por Favor Ingresa Contraseña Valida','password')
            valid = false;
        }

        if(valid){
            login();
        }
        
    }
    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    }

    const handleError = (errorMessage, input) =>{
        setErrors(prevState => ({...prevState,[input]:errorMessage}))
    }
    
    const login = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            
            try{
                navigation.navigate("Home")
            }catch(error){
                Alert.alert('Error','Algo esta mal');
            }
        },2000)
    }

    //console.log(inputs);

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
            <Loader visible={loading}/>
            <ScrollView
                contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20, }}>

                <Text style={{ color: colors.black, fontSize: 40, fontWeight: 'bold' }}>
                    Login
                </Text>

                <Text style={{ color: colors.gray, fontSize: 18, marginVertical: 10 }}>
                    Ingrese sus Datos para Iniciar Sesion
                </Text>
                <View style={{ marginVertical: 20 }}>
                    <Input 
                        label={"Email"} 
                        iconName={"email-outline"} 
                        placeholder="Ingresa tu Email"
                        onChangeText={text=>handleOnChange(text,'email')}
                        error={errors.email}
                        onFocus={()=>{
                            handleError(null,'email')
                        }}>   

                    </Input>

                    <Input
                        label={"Contraseña"}
                        iconName={"lock-outline"}
                        placeholder="Ingresa tu Contraseña"
                        password
                        onChangeText={text=>handleOnChange(text,'password')}
                        error={errors.password}
                        onFocus={()=>{
                            handleError(null,'password')
                        }}>
                            
                    </Input>

                    <Button tittle={"Ingresar"} onPress={ validate /*() => navigation.navigate(ROUTES.HOME)*/}></Button>
                    <Text
                        onPress={() => navigation.navigate(ROUTES.REGISTER)}
                        style={{ color: colors.black, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                        No tienes cuenta?
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login