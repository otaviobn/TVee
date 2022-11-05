import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  name: string;
  containerStyle?: ViewStyle;
  coverImage: string | undefined;
  season: number;
  number: number;
  onPress: () => void;
};

export const EpisodeCard = (props: Props) => {
  const {name, containerStyle, coverImage, season, number, onPress} = props;
  return (
    <Pressable onPress={onPress} style={[styles.constainer, containerStyle]}>
      <View style={styles.coverImageContainer}>
        <Image style={styles.coverImage} source={{uri: coverImage}} />
      </View>
      <View style={styles.showDescriptionContainer}>
        <Text style={styles.titleText}>
          S{('0' + season).slice(-2)} | E{('0' + number).slice(-2)}
        </Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  showDescriptionContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  coverImageContainer: {
    overflow: 'hidden',
    height: '100%',
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  coverImage: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 100,
    width: 100,
  },
  constainer: {
    height: 100,
    flexDirection: 'row',
    borderRadius: 5,
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
  titleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  nameText: {
    fontSize: 16,
    color: '#A9A9A9',
    fontWeight: '500',
  },
  extraInfoText: {
    fontSize: 15,
    color: '#A9A9A9',
  },
});
