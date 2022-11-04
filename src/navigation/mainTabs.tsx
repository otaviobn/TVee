import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@constants';
import {ShowsStack} from './showsStack';
import {FavoriteShowsStack} from './favoriteShowsStack';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Route.Shows} component={ShowsStack} />
      <Tab.Screen name={Route.Favorites} component={FavoriteShowsStack} />
    </Tab.Navigator>
  );
};
