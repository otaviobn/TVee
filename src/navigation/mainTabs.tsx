import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@constants';
import {ShowsStack} from './showsStack';
import {FavoriteShowsStack} from './favoriteShowsStack';
import {Profile} from '@routes';

export type MainTabsParamList = {
  [Route.Shows]: undefined;
  [Route.Favorites]: undefined;
  [Route.Profile]: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Route.Shows}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Route.Shows} component={ShowsStack} />
      <Tab.Screen name={Route.Favorites} component={FavoriteShowsStack} />
      <Tab.Screen name={Route.Profile} component={Profile} />
    </Tab.Navigator>
  );
};
