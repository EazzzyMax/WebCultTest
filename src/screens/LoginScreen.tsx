import React, {useState} from 'react';
import {View, StyleSheet, Alert, SafeAreaView} from 'react-native';
import {emailIsValid} from '../utils/helpers';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {
    if (!emailIsValid(emailInput)) {
      Alert.alert('Ошибка', 'Введите корректный адрес электронной почты');
    } else if (!passwordInput) {
      Alert.alert('Ошибка', 'Введите пароль');
    } else {
      navigation.navigate('Main', {email: emailInput});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmailInput}
          value={emailInput}
        />
        <Input
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          onChangeText={setPasswordInput}
          value={passwordInput}
        />
        <Button title="Войти" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
  wrapper: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;
