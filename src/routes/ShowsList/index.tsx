import {CardSeparator, ShowCard} from '@components';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useShowsList} from './useShowsList';

export const ShowsList = () => {
  const {isInitialLoading, data, fetchNextPage, error} = useShowsList();

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
      renderItem={({item}) => (
        <ShowCard
          premiered={item.premiered}
          containerStyle={styles.showCardContainer}
          coverImage={item.image.medium}
          name={item.name}
          genres={item.genres}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}
      contentContainerStyle={styles.contentContainerStyle}
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
