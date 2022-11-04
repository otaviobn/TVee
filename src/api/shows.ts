import axios from 'axios';
import {showsApiBaseUrl} from '@constants';
import {type Show} from './types';

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
  const {data} = await axios.get<Show>(`${showsApiBaseUrl}/shows/${showId}`);

  return {
    show: data,
  };
};
