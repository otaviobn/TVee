import {CardSeparator, ShowCard} from '@components';
import {Route} from '@constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '@navigation';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useShowsList} from './useShowsList';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.ShowsList>;

export const ShowsList = (props: Props) => {
  const {navigation} = props;

  const {isInitialLoading, data, fetchNextPage, error} = useShowsList();

  const {top} = useSafeAreaInsets();

  if (isInitialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Ops.. Something went wrong...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.pages.map(page => page.shows).flat()}
      // ListHeaderComponent={() => <Text>Teste</Text>}
      renderItem={({item}) => (
        <ShowCard
          premiered={item.premiered}
          containerStyle={styles.showCardContainer}
          coverImage={item.image.medium}
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
          paddingTop: top,
        },
      ]}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <CardSeparator />}
    />
  );
};

const styles = StyleSheet.create({
  showCardContainer: {
    paddingHorizontal: 15,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingVertical: 10,
  },
});
