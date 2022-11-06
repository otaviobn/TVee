import {CardSeparator, ShowCard} from '@components';
import {Route, tokens} from '@constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '@navigation';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useFavoriteShows} from './useFavoriteShows';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.ShowsList>;

export const FavoriteShows = (props: Props) => {
  const {navigation} = props;

  const {showsQuery} = useFavoriteShows();

  const {top} = useSafeAreaInsets();

  return (
    <FlatList
      data={showsQuery.data}
      renderItem={({item}) => (
        <ShowCard
          premiered={item.premiered}
          containerStyle={styles.showCardContainer}
          coverImage={item.image ? item.image.medium : undefined}
          name={item.name}
          genres={item.genres}
          onPress={() =>
            navigation.navigate(Route.ShowDetails, {showId: item.id})
          }
        />
      )}
      contentContainerStyle={[
        styles.contentContainerStyle,
        {
          paddingTop: top + tokens.verticalSpace,
        },
      ]}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={CardSeparator}
    />
  );
};

const styles = StyleSheet.create({
  showCardContainer: {
    paddingHorizontal: tokens.horizontalSpace,
  },

  contentContainerStyle: {
    paddingVertical: 10,
  },
});
