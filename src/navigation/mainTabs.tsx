import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@constants';
import {ShowsStack} from './showsStack';
import {FavoriteShowsStack} from './favoriteShowsStack';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={Route.Shows} component={ShowsStack} />
        <Tab.Screen name={Route.Favorites} component={FavoriteShowsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
