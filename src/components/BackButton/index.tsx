import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};

export const BackButton = (props: Props) => {
  const {onPress} = props;

  return (
    <Pressable onPress={onPress} style={[styles.constainer]}>
      <Icon name={'arrow-back'} size={25} color={'#fff'} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
