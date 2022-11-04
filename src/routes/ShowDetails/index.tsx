import {Route} from '@constants';
import {ShowsStackParamList} from '@navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.ShowDetails>;

export const ShowDetails = (props: Props) => {
  const {
    route: {
      params: {showId},
    },
  } = props;
  return (
    <View>
      <Text>{showId}</Text>
    </View>
  );
};
