import {useInfiniteQuery} from '@tanstack/react-query';
import {getShows} from '@api';

export const useShowsList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isInitialLoading,
  } = useInfiniteQuery({
    queryKey: ['shows'],
    queryFn: getShows,
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isInitialLoading,
  };
};
