import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IButton extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, style, ...props}: IButton) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontWeight: '900',
    letterSpacing: 0.5,
    fontSize: 18,
  },
});

export default Button;
