import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackButton} from '../BackButton';

type Props = {
  episodeName: string;
  showName: string;
  season: number;
  number: number;
  coverImage: string | undefined;
  airdate: string;
  average: number;
  onBackPress: () => void;
  safeAreaStyle?: ViewStyle;
};

export const EpisodeCover = (props: Props) => {
  const {
    showName,
    coverImage,
    season,
    number,
    episodeName,
    airdate,
    average,
    onBackPress,
    safeAreaStyle,
  } = props;

  return (
    <View style={styles.coverImageContainer}>
      <ImageBackground
        source={{uri: coverImage}}
        style={StyleSheet.absoluteFill}
        blurRadius={5}
      />
      <View style={[StyleSheet.absoluteFill, styles.coverOverLay]} />
      <SafeAreaView style={[styles.safeArea, safeAreaStyle]}>
        <View style={styles.buttonsHeaderContainer}>
          <BackButton onPress={onBackPress} />
        </View>
        <View style={styles.showDescriptionContainer}>
          <View style={styles.showNameContainer}>
            <Text style={styles.showNameText}>{showName}</Text>
          </View>
          <Text style={styles.titleText}>
            S{('0' + season).slice(-2)} | E{('0' + number).slice(-2)}
          </Text>
          <Text style={styles.nameText}>{episodeName}</Text>
          <Text style={styles.airdate}>Aired on {airdate}</Text>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.boxValue}>{average}</Text>
              <Text style={styles.boxLabel}>Rating</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  coverImageContainer: {
    height: Dimensions.get('screen').height / 2,
  },
  backButton: {
    color: '#fff',
  },
  showDescriptionContainer: {
    alignItems: 'center',
  },
  coverOverLay: {
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  showNameContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showNameText: {
    color: '#FFFAFA',
    fontSize: 15,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  nameText: {
    color: '#FFFAFA',
    fontSize: 15,
    marginBottom: 5,
  },
  airdate: {
    color: '#FFFAFA',
    fontSize: 15,
  },
  boxLabel: {
    color: '#FFFAFA',
    marginTop: 5,
  },
  boxValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  box: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonsHeaderContainer: {
    alignSelf: 'flex-start',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
