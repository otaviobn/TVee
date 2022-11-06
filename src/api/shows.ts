import axios from 'axios';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {showsApiBaseUrl} from '@constants';
import {type ShowEpisode, type Show} from './types';
import groupBy from 'lodash.groupby';

const groupEpisodesBySeason = (episodes: ShowEpisode[]) => {
  return Object.entries(groupBy(episodes, 'season')).map(([key, data]) => ({
    title: `Season ${key}`,
    data,
  }));
};

export const getShows = async ({pageParam = 0}) => {
  const {data} = await axios.get<Show[]>(
    `${showsApiBaseUrl}/shows?page=${pageParam}`,
  );
  return {
    shows: data,
    nextPage: data.length ? pageParam + 1 : undefined,
  };
};

export const searchShows = async ({query = ''}) => {
  const {data} = await axios.get<{score: number; show: Show}[]>(
    `${showsApiBaseUrl}/search/shows?q=${query}`,
  );

  return data.map(item => item.show);
};

export const getShow = async ({showId}: {showId: number}) => {
  const {data: showData} = await axios.get<Show>(
    `${showsApiBaseUrl}/shows/${showId}`,
  );
  const {data: episodes} = await axios.get<ShowEpisode[]>(
    `${showsApiBaseUrl}/shows/${showId}/episodes`,
  );

  return {
    ...showData,
    episodes: groupEpisodesBySeason(episodes),
  };
};

export const setFavoriteShow = async ({showId}: {showId: number}) => {
  const userId = auth().currentUser?.uid;

  if (userId) {
    database().ref(`/users/${userId}/favorites`).push(showId);
  }
};

export const removeFavoriteShow = async ({
  favoriteId,
}: {
  favoriteId: string;
}) => {
  const userId = auth().currentUser?.uid;

  if (userId) {
    await database().ref(`/users/${userId}/favorites/${favoriteId}`).remove();
  }
};
