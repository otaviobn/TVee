import {Route} from '@constants';
import {ShowsStackParamList} from '@navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useShowDetails} from './useShowDetails';
import RenderHtml from 'react-native-render-html';

type Props = NativeStackScreenProps<ShowsStackParamList, Route.ShowDetails>;

export const ShowDetails = (props: Props) => {
  const {
    navigation,
    route: {
      params: {showId},
    },
  } = props;

  const {showQuery: {data} = {}} = useShowDetails({showId});

  const {width} = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverImageContainer}>
        <ImageBackground
          blurRadius={15}
          style={StyleSheet.absoluteFill}
          source={{uri: data?.show.image?.original}}
        />
        <View style={[StyleSheet.absoluteFill, styles.coverOverLay]} />
        <SafeAreaView style={styles.safeAreaView}>
          <Pressable onPress={navigation.goBack}>
            <Text style={styles.backButton}>{'<'} Back</Text>
          </Pressable>
          <View style={styles.showTitleContainer}>
            <Text style={styles.nameText}>{data?.show.name}</Text>
            <Text style={styles.genresText}>
              {data?.show.genres.join(', ')}
            </Text>
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <Text style={styles.boxValue}>{data?.show.status}</Text>
                <Text style={styles.boxLabel}>Status</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxValue}>
                  {new Date(data?.show.premiered || '').getFullYear()}
                </Text>
                <Text style={styles.boxLabel}>Premiered</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.boxValue}>{data?.show.rating.average}</Text>
                <Text style={styles.boxLabel}>Rating</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.summaryContainer}>
        <RenderHtml
          contentWidth={width}
          source={{html: data?.show.summary || ''}}
        />
      </View>
    </ScrollView>
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
  showTitleContainer: {},
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
  summaryContainer: {
    paddingHorizontal: 15,
  },
});
