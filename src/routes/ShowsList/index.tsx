import {
  CardSeparator,
  EmptySearchShowsList,
  FilterBox,
  ShowCard,
} from '@components';
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

  const {
    setSearchTerm,
    isError,
    isInitialLoading,
    fetchNextPage,
    shows,
    searchTerm,
    isFetchingSearch,
  } = useShowsList();

  const {top} = useSafeAreaInsets();

  if (isInitialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Ops.. Something went wrong...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={shows}
      ListHeaderComponent={
        <FilterBox
          loading={isFetchingSearch}
          onChangeText={setSearchTerm}
          containerStyle={styles.filterBoxContainer}
        />
      }
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
          paddingTop: top,
        },
      ]}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={CardSeparator}
      ListEmptyComponent={<EmptySearchShowsList searchTerm={searchTerm} />}
    />
  );
};

const styles = StyleSheet.create({
  filterBoxContainer: {
    marginHorizontal: 15,
  },
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
