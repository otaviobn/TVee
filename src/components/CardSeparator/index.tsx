import React from 'react';
import {StyleSheet, View} from 'react-native';

export const CardSeparator = () => {
  return <View style={styles.constainer} />;
};

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 0.5,
    marginVertical: 15,
    borderColor: '#DCDCDC',
  },
});
