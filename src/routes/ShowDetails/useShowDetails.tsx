import {getShow} from '@api';
import {useQuery} from '@tanstack/react-query';

export const useShowDetails = ({showId}: {showId: number}) => {
  const showQuery = useQuery([`show-${showId}`], () => getShow({showId}));

  return {showQuery};
};
