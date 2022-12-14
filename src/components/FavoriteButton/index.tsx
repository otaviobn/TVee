import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
  isFavorite: boolean;
};

export const FavoriteButton = (props: Props) => {
  const {onPress, isFavorite} = props;

  const iconType = isFavorite ? '' : '-outline';

  return (
    <Pressable onPress={onPress} style={styles.constainer}>
      <Icon name={`heart${iconType}`} size={25} color={'red'} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
