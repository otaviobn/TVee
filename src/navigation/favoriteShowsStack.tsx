import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '@constants';
import {FavoriteShows, ShowDetails} from '@routes';

const Stack = createNativeStackNavigator();

export const FavoriteShowsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.FavoriteShows} component={FavoriteShows} />
      <Stack.Screen name={Route.ShowDetails} component={ShowDetails} />
    </Stack.Navigator>
  );
};
