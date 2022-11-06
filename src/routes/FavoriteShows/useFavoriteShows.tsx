import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {getShowsByIds} from '@api';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

export const useFavoriteShows = () => {
  const [showIds, setShowIds] = useState<number[]>([]);

  useEffect(() => {
    const userId = auth().currentUser?.uid;

    if (userId) {
      const onFavoritesChange = database()
        .ref(`/users/${userId}/favorites`)
        .on('value', snapshot => {
          if (snapshot.val()) {
            const favorites = Object.values(snapshot.val()) as number[];

            setShowIds(favorites);
          } else {
            setShowIds([]);
          }
        });

      return () =>
        database().ref(`/users/${userId}`).off('value', onFavoritesChange);
    }
  }, []);

  const showsQuery = useQuery(['shows', showIds], () =>
    getShowsByIds({showIds}),
  );

  return {showsQuery};
};
