import {getEpisode} from '@api';
import {useQuery} from '@tanstack/react-query';

export const useEpisodeDetails = ({episodeId}: {episodeId: number}) => {
  const episodeQuery = useQuery([`episode-${episodeId}`], () =>
    getEpisode({episodeId}),
  );

  return {episodeQuery};
};
