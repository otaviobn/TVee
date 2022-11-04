import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '@constants';
import {ShowDetails, ShowsList} from '@routes';

const Stack = createNativeStackNavigator();

export const ShowsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.ShowsList} component={ShowsList} />
      <Stack.Screen name={Route.ShowDetails} component={ShowDetails} />
    </Stack.Navigator>
  );
};
