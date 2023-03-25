import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Logo from '../assets/imgs/Logo';
import Button from '../components/Button';

const StartScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Logo />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          title="Начать"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
});

export default StartScreen;
