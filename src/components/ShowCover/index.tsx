import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  genres: string[] | undefined;
  name: string | undefined;
  status: string | undefined;
  premiered: string | undefined;
  average: number | undefined;
  coverImage: string | undefined;
  schedule:
    | {
        time: string;
        days: string[];
      }
    | undefined;
  onBackPress: () => void;
};

export const ShowCover = (props: Props) => {
  const {
    genres,
    name,
    status,
    premiered,
    average,
    onBackPress,
    coverImage,
    schedule,
  } = props;

  return (
    <View style={styles.coverImageContainer}>
      <ImageBackground
        blurRadius={15}
        style={StyleSheet.absoluteFill}
        source={{uri: coverImage}}
      />
      <View style={[StyleSheet.absoluteFill, styles.coverOverLay]} />
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable onPress={onBackPress}>
          <Text style={styles.backButton}>{'<'} Back</Text>
        </Pressable>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          {!!schedule && (
            <Text style={styles.scheduleText}>
              Every {schedule.days.join(', ')} at {schedule.time}
            </Text>
          )}
          <Text style={styles.genresText}>{!!genres && genres.join(', ')}</Text>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text style={styles.boxValue}>{status}</Text>
              <Text style={styles.boxLabel}>Status</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxValue}>
                {new Date(premiered || '').getFullYear()}
              </Text>
              <Text style={styles.boxLabel}>Premiered</Text>
            </View>
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
    height: 500,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  coverOverLay: {
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  nameText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  genresText: {
    color: '#FFFAFA',
    fontSize: 15,
    textAlign: 'center',
  },
  backButton: {
    color: '#fff',
  },
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  scheduleText: {
    color: '#FFFAFA',
    marginVertical: 5,
    textAlign: 'center',
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
    margin: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
