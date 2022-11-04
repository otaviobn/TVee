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
