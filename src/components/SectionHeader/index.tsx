import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  title: string;
  extraInfo?: string;
  containerStyle?: ViewStyle;
};

export const SectionHeader = (props: Props) => {
  const {title, extraInfo, containerStyle} = props;
  return (
    <View style={[styles.constainer, containerStyle]}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.extraInfoText}>{extraInfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  extraInfoText: {
    fontSize: 15,
    color: '#A9A9A9',
  },
});
