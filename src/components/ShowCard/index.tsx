import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Pressable,
} from 'react-native';

type Props = {
  name: string;
  genres: string[];
  coverImage: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  premiered: string;
};

export const ShowCard = (props: Props) => {
  const {coverImage, name, containerStyle, genres, premiered, onPress} = props;

  return (
    <Pressable onPress={onPress} style={[styles.constainer, containerStyle]}>
      <Image style={styles.coverImage} source={{uri: coverImage}} />
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.premieredText}>
          {new Date(premiered).getFullYear()}
        </Text>
        <Text style={styles.genreText}>{genres.join(', ')}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  coverImage: {
    width: 80,
    height: 130,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
  },
  premieredText: {
    fontSize: 12,
    color: '#696969',
  },
  genreText: {
    fontSize: 12,
    color: '#696969',
  },
});
