import axios from 'axios';
import {showsApiBaseUrl} from '@constants';
import {type ShowEpisode} from './types';

export const getEpisode = async ({episodeId}: {episodeId: number}) => {
  const {data} = await axios.get<ShowEpisode>(
    `${showsApiBaseUrl}/episodes/${episodeId}`,
  );

  return data;
};
