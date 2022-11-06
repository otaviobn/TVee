import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

type Props = {
  onPress: () => void;
  text: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  outlined?: boolean;
};

export const Button = (props: Props) => {
  const {text, onPress, textStyle, containerStyle, outlined} = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.constainer,
        containerStyle,
        outlined ? styles.outlined : undefined,
      ]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontWeight: '500',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
});
