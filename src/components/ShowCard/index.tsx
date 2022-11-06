import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Pressable,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  genres: string[];
  coverImage: string | undefined;
  onPress: () => void;
  containerStyle?: ViewStyle;
  premiered: string;
};

export const ShowCard = (props: Props) => {
  const {coverImage, name, containerStyle, genres, premiered, onPress} = props;

  return (
    <Pressable onPress={onPress} style={[styles.constainer, containerStyle]}>
      <View style={styles.coverImageContainer}>
        {coverImage ? (
          <ImageBackground
            style={styles.coverImage}
            source={{uri: coverImage}}
          />
        ) : (
          <Text style={styles.coverNotFoundText}>Cover not found</Text>
        )}
      </View>
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.premieredText}>
          {new Date(premiered).getFullYear()}
        </Text>
        <Text style={styles.genreText}>{genres.join(', ')}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Icon name={'chevron-forward'} size={25} color={'grey'} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  coverImageContainer: {
    justifyContent: 'center',
    width: 80,
    height: 130,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: '#A9A9A9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: 80,
    height: 130,
    borderRadius: 5,
    overflow: 'hidden',
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
  coverNotFoundText: {
    textAlign: 'center',
  },
  arrowContainer: {
    marginLeft: 'auto',
  },
});
