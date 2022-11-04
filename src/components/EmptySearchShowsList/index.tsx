import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  searchTerm: string;
  containerStyle?: ViewStyle;
};

export const EmptySearchShowsList = (props: Props) => {
  const {searchTerm, containerStyle} = props;

  return (
    <View style={[styles.constainer, containerStyle]}>
      <Text style={styles.noResultsText}>
        No results found for "{searchTerm}"
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginVertical: 15,
    borderColor: '#DCDCDC',
  },
  noResultsText: {
    textAlign: 'center',
  },
});
