import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '@constants';
import {FavoriteShows, ShowDetails, EpisodeDetails} from '@routes';

export type FavoriteShowsStackParamList = {
  [Route.FavoriteShows]: undefined;
  [Route.ShowDetails]: {showId: number};
  [Route.EpisodeDetails]: {episodeId: number; showName: string};
};

const Stack = createNativeStackNavigator<FavoriteShowsStackParamList>();

export const FavoriteShowsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.FavoriteShows} component={FavoriteShows} />
      <Stack.Screen name={Route.ShowDetails} component={ShowDetails} />
      <Stack.Screen name={Route.EpisodeDetails} component={EpisodeDetails} />
    </Stack.Navigator>
  );
};
