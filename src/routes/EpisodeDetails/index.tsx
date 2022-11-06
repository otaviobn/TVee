import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowsStackParamList} from '@navigation';
import {Route, tokens} from '@constants';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {EpisodeCover} from '@components';
import {useEpisodeDetails} from './useEpisodeDetails';
import RenderHtml from 'react-native-render-html';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.EpisodeDetails>;

export const EpisodeDetails = (props: Props) => {
  const {
    navigation,
    route: {
      params: {episodeId, showName},
    },
  } = props;

  const {episodeQuery} = useEpisodeDetails({episodeId});

  const {width} = useWindowDimensions();

  return (
    <ScrollView>
      <EpisodeCover
        safeAreaStyle={styles.coverSafeArea}
        onBackPress={navigation.goBack}
        showName={showName}
        episodeName={episodeQuery.data?.name || ''}
        season={episodeQuery.data?.season || 0}
        number={episodeQuery.data?.number || 0}
        coverImage={episodeQuery.data?.image?.original}
        airdate={episodeQuery.data?.airdate || ''}
        average={episodeQuery.data?.rating.average || 0}
      />
      <View style={styles.summaryContainer}>
        <RenderHtml
          contentWidth={width}
          source={{html: episodeQuery.data?.summary || ''}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    paddingHorizontal: tokens.horizontalSpace,
  },
  coverSafeArea: {
    paddingHorizontal: tokens.horizontalSpace,
  },
});
