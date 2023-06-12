import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard
} from 'react-native';
import COLORS from '../../constans/colors';
import ROUTES from '../../constans/routes';
import Button from '../../components/Button';
import colors from '../../constans/colors';
import Input from '../../components/Input'
import { Loader } from '../../components';


const Register = (props) => {
  const { navigation } = props;
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const [errors, setErrors] = React.useState({});

  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    {/******************** EMAIL VALIDATION*********************/ }
    if (!inputs.email) {
      handleError('Por Favor Ingresa tu Email', 'email')
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Por Favor Ingresa Email Valido', 'email')
    }

    {/******************** PASSWORD VALIDATION*********************/ }
    if (!inputs.password) {
      handleError('Por Favor Ingresa tu Contraseña', 'password')
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError('Por Favor Ingresa Contraseña Valida', 'password')
      valid = false;
    }
    {/******************** NAME VALIDATION*********************/ }
    if (!inputs.name) {
      handleError('Por Favor Ingresa tu Nombre', 'name')
      valid = false;
    }
    {/******************** PHONE VALIDATION*********************/ }
    if (!inputs.phone) {
      handleError('Por Favor Ingresa tu Telefono', 'phone')
      valid = false;
    }

    if (valid) {
      register();
    }

  }
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  }

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({ ...prevState, [input]: errorMessage }))
  }

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        navigation.navigate("Home")
      } catch (error) {
        Alert.alert('Error', 'Algo esta mal');
      }
    }, 2000)
  }


  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <Loader visible={loading}></Loader>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20, }}>

        <Text style={{ color: colors.black, fontSize: 40, fontWeight: 'bold' }}>
          Registro
        </Text>

        <Text style={{ color: colors.gray, fontSize: 18, marginVertical: 10 }}>
          Ingresa tus Datos para Registrarse
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            label={"Email"}
            iconName={"email-outline"}
            placeholder="Ingresa tu Email"
            onChangeText={text => handleOnChange(text, 'email')}
            error={errors.email}
            onFocus={() => {
              handleError(null, 'email')
            }}>
          </Input>

          <Input
            label={"Contraseña"}
            iconName={"lock-outline"}
            placeholder="Ingresa tu Contraseña"
            password
            onChangeText={text => handleOnChange(text, 'password')}
            error={errors.password}
            onFocus={() => {
              handleError(null, 'password')
            }}>
          </Input>

          <Input
            label={"Nombre Completo"}
            iconName={"account-outline"}
            placeholder="Ingresa tu Nombre"
            onChangeText={text => handleOnChange(text, 'name')}
            error={errors.name}
            onFocus={() => {
              handleError(null, 'name')
            }}>
          </Input>

          <Input
            label={"Numero Telefonico"}
            iconName={"phone-outline"}
            placeholder="Ingresa tu Telefono"
            onChangeText={text => handleOnChange(text, 'phone')}
            error={errors.phone}
            onFocus={() => {
              handleError(null, 'phone')
            }}>

          </Input>

          <Button tittle={"Registrar"} onPress={validate}></Button>
          <Text
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
            style={{ color: colors.black, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
            Ya tienes cuenta?
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Register