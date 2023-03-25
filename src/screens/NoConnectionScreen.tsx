import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoConnectionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Отсутствует подключение к интернету.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default NoConnectionScreen;
