import {Route, tokens} from '@constants';
import {ShowsStackParamList} from '@navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, useWindowDimensions, SectionList} from 'react-native';
import {useShowDetails} from './useShowDetails';
import RenderHtml from 'react-native-render-html';
import {EpisodeCard, ShowCover} from '@components';
import {SectionHeader} from '@components';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.ShowDetails>;

export const ShowDetails = (props: Props) => {
  const {
    navigation,
    route: {
      params: {showId},
    },
  } = props;

  const {showQuery, favoriteShow, favoriteStatus} = useShowDetails({showId});

  const {width} = useWindowDimensions();

  return (
    <SectionList
      sections={showQuery.data?.episodes || []}
      stickySectionHeadersEnabled={false}
      style={styles.container}
      renderItem={({item}) => (
        <EpisodeCard
          onPress={() =>
            navigation.navigate(Route.EpisodeDetails, {
              episodeId: item.id,
              showName: showQuery.data?.name || '',
            })
          }
          season={item.season}
          number={item.number}
          coverImage={item.image ? item.image.medium : undefined}
          containerStyle={styles.episodeCardContainer}
          name={item.name}
        />
      )}
      renderSectionHeader={({section}) => (
        <SectionHeader
          containerStyle={styles.sectionHeaderContainer}
          title={section.title}
          extraInfo={`${section.data.length} episodes`}
        />
      )}
      ListHeaderComponent={
        <>
          <ShowCover
            onFavoritePress={favoriteShow}
            isFavorite={favoriteStatus.isFavorite}
            schedule={showQuery.data?.schedule}
            genres={showQuery.data?.genres}
            name={showQuery.data?.name}
            status={showQuery.data?.status}
            premiered={showQuery.data?.premiered}
            average={showQuery.data?.rating.average}
            coverImage={showQuery.data?.image.original}
            onBackPress={navigation.goBack}
            safeAreaStyle={styles.coverSafeArea}
          />
          <View style={styles.summaryContainer}>
            <RenderHtml
              contentWidth={width}
              source={{html: showQuery.data?.summary || ''}}
            />
          </View>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryContainer: {
    paddingHorizontal: tokens.horizontalSpace,
  },
  sectionHeaderContainer: {
    marginHorizontal: tokens.horizontalSpace,
    marginVertical: 15,
  },
  episodeCardContainer: {
    marginHorizontal: tokens.horizontalSpace,
    marginBottom: 10,
  },
  coverSafeArea: {
    paddingHorizontal: tokens.horizontalSpace,
  },
});
