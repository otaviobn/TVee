import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '@constants';
import {Login, SignUp} from '@routes';

export type AuthStackParamList = {
  [Route.Login]: undefined;
  [Route.SignUp]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Route.Login} component={Login} />
      <Stack.Screen name={Route.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};
