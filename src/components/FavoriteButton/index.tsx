import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

type Props = {
  onPress: () => void;
  isFavorite: boolean;
  containerStyle?: ViewStyle;
  outlined?: boolean;
};

export const FavoriteButton = (props: Props) => {
  const {onPress, isFavorite, containerStyle, outlined} = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.constainer,
        containerStyle,
        outlined ? styles.outlined : undefined,
      ]}>
      <Text style={styles.text}>{isFavorite ? 'Unlove' : 'Love'}</Text>
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
