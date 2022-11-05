import {Route} from '@constants';
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

  const {showQuery} = useShowDetails({showId});

  const {width} = useWindowDimensions();

  return (
    <SectionList
      sections={showQuery.data?.show.episodes || []}
      stickySectionHeadersEnabled={false}
      style={styles.container}
      renderItem={({item}) => (
        <EpisodeCard
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
            schedule={showQuery.data?.show.schedule}
            genres={showQuery.data?.show.genres}
            name={showQuery.data?.show.name}
            status={showQuery.data?.show.status}
            premiered={showQuery.data?.show.premiered}
            average={showQuery.data?.show.rating.average}
            coverImage={showQuery.data?.show.image.original}
            onBackPress={navigation.goBack}
          />
          <View style={styles.summaryContainer}>
            <RenderHtml
              contentWidth={width}
              source={{html: showQuery.data?.show.summary || ''}}
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
    paddingHorizontal: 15,
  },
  sectionHeaderContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  episodeCardContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
