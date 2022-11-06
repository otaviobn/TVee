import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '@constants';
import {ShowsStack} from './showsStack';
import {FavoriteShowsStack} from './favoriteShowsStack';
import {Profile} from '@routes';
import Icon from 'react-native-vector-icons/Ionicons';

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
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const iconType = focused ? '' : '-outline';

          switch (route.name) {
            case Route.Shows:
              return <Icon name={`tv${iconType}`} size={size} color={color} />;
            case Route.Favorites:
              return (
                <Icon name={`heart${iconType}`} size={size} color={color} />
              );
            case Route.Profile:
              return (
                <Icon name={`person${iconType}`} size={size} color={color} />
              );
            default:
              return (
                <Icon name={`home${iconType}`} size={size} color={color} />
              );
          }
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={Route.Shows} component={ShowsStack} />
      <Tab.Screen name={Route.Favorites} component={FavoriteShowsStack} />
      <Tab.Screen name={Route.Profile} component={Profile} />
    </Tab.Navigator>
  );
};
