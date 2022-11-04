import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {getShows, searchShows} from '@api';
import {useCallback, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';

export const useShowsList = () => {
  const [query, setQuery] = useState('');

  const fullShowQuery = useInfiniteQuery({
    queryKey: ['shows'],
    queryFn: getShows,
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  const filteredShowsQuery = useQuery(
    ['showsSearch', query],
    () => searchShows({query}),
    {keepPreviousData: true},
  );

  const setSearchTerm = debounce(setQuery, 1000);

  const fetchNextPage = useCallback(() => {
    if (!query && fullShowQuery.hasNextPage) {
      fullShowQuery.fetchNextPage();
    }
  }, [query, fullShowQuery]);

  const isError = useMemo(
    () => fullShowQuery.isError || filteredShowsQuery.isError,
    [filteredShowsQuery.isError, fullShowQuery.isError],
  );

  return {
    isFetchingSearch: filteredShowsQuery.isFetching,
    shows: query
      ? filteredShowsQuery.data?.shows
      : fullShowQuery.data?.pages.map(page => page.shows).flat(),
    setSearchTerm,
    searchTerm: query,
    fetchNextPage,
    isError,
    isInitialLoading: fullShowQuery.isInitialLoading,
  };
};
