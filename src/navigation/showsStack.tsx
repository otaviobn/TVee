import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '@constants';
import {EpisodeDetails, ShowDetails, ShowsList} from '@routes';

export type ShowsStackParamList = {
  [Route.ShowsList]: undefined;
  [Route.ShowDetails]: {showId: number};
  [Route.EpisodeDetails]: {episodeId: number; showName: string};
};

const Stack = createNativeStackNavigator<ShowsStackParamList>();

export const ShowsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.ShowsList} component={ShowsList} />
      <Stack.Screen name={Route.ShowDetails} component={ShowDetails} />
      <Stack.Screen name={Route.EpisodeDetails} component={EpisodeDetails} />
    </Stack.Navigator>
  );
};
