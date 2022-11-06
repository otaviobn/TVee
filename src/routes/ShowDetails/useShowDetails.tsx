import auth from '@react-native-firebase/auth';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {getShow, removeFavoriteShow, setFavoriteShow} from '@api';
import {useQuery} from '@tanstack/react-query';
import {useCallback, useEffect, useState} from 'react';

export const useShowDetails = ({showId}: {showId: number}) => {
  const [favoriteStatus, setFavoriteStatus] = useState({
    isFavorite: false,
    favoriteId: '',
  });

  const showQuery = useQuery([`show-${showId}`], () => getShow({showId}));

  useEffect(() => {
    const userId = auth().currentUser?.uid;

    if (userId) {
      const onFavoritesChange = database()
        .ref(`/users/${userId}/favorites`)
        .on('value', (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
          if (snapshot.val()) {
            const favorite = Object.entries(snapshot.val()).find(
              ([, id]) => id === showId,
            );

            if (favorite) {
              setFavoriteStatus({
                isFavorite: true,
                favoriteId: favorite[0],
              });
            }
          }
        });

      return () =>
        database().ref(`/users/${userId}`).off('value', onFavoritesChange);
    }
  }, [showId]);

  const favoriteShow = useCallback(() => {
    if (!favoriteStatus.isFavorite) {
      setFavoriteShow({showId});
    } else {
      removeFavoriteShow({favoriteId: favoriteStatus.favoriteId});
      setFavoriteStatus({
        isFavorite: false,
        favoriteId: '',
      });
    }
  }, [favoriteStatus.favoriteId, favoriteStatus.isFavorite, showId]);

  return {showQuery, favoriteShow, favoriteStatus};
};
