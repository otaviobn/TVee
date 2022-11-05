import axios from 'axios';
import {showsApiBaseUrl} from '@constants';
import {ShowEpisode, type Show} from './types';
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

  return {
    shows: data.map(item => item.show),
  };
};

export const getShow = async ({showId}: {showId: number}) => {
  const {data: showData} = await axios.get<Show>(
    `${showsApiBaseUrl}/shows/${showId}`,
  );
  const {data: episodes} = await axios.get<ShowEpisode[]>(
    `${showsApiBaseUrl}/shows/${showId}/episodes`,
  );

  return {
    show: {
      ...showData,
      episodes: groupEpisodesBySeason(episodes),
    },
  };
};
