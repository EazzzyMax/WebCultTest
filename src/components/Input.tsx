import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const Input = ({style, ...props}: TextInputProps) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 15,
    paddingLeft: 15,
    height: 50,
  },
});

export default Input;
