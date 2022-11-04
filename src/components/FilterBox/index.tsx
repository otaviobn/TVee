import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  onChangeText: (value: string) => void;
  containerStyle?: ViewStyle;
  loading: boolean;
};

export const FilterBox = (props: Props) => {
  const {onChangeText, containerStyle, loading} = props;

  const [value, setValue] = useState('');

  const setText = useCallback(
    (text: string) => {
      onChangeText(text);
      setValue(text);
    },
    [onChangeText],
  );

  return (
    <View style={[styles.constainer, containerStyle]}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={setText}
      />
      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} size={'small'} />
      ) : (
        <Pressable style={styles.clearSearchButton} onPress={() => setText('')}>
          <Text>X</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderRadius: 5,
    padding: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  activityIndicator: {
    marginLeft: 'auto',
  },
  clearSearchButton: {
    marginLeft: 'auto',
  },
  textInput: {
    flex: 1,
  },
});
