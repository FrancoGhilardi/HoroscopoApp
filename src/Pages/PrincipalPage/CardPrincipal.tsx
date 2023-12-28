/* eslint-disable react-native/no-inline-styles */
import React, {memo, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primary} from '../../../paletteColors.json';
import {useGetList} from '../../Services/Query';
import {IZodialSings} from '../../Services/interfaces';
import Video from 'react-native-video';

const CardPrincipal: React.FC = () => {
  const videoRef = useRef<Video>(null);

  //-- Get List Horoscopo --/
  const {data} = useGetList();

  const horoscopoToday = useMemo<IZodialSings | null>(() => {
    if (!data) {
      return null;
    }
    return data.zodiac_signs[0];
  }, [data]);

  const video = useMemo<string | undefined>(() => {
    if (!data) {
      return undefined;
    }
    return data.videos[0].url;
  }, [data]);

  const signo = useMemo<string>(
    () => horoscopoToday?.name || '',
    [horoscopoToday?.name],
  );

  const prediction = useMemo<string>(
    () => horoscopoToday?.prediction || '',
    [horoscopoToday?.prediction],
  );

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.containerTitle}>
          <View style={[styles.subContainerTitle, {width: '40%'}]}>
            <Video
              source={{uri: video}}
              ref={videoRef}
              style={styles.backgroundVideo}
            />
          </View>
          <View style={[styles.subContainerTitle, {width: '60%'}]}>
            <Text style={styles.textTitle}>{signo}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.containerPredictin}>{prediction}</Text>
        </View>
      </View>
    </View>
  );
};
export default memo(CardPrincipal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary.purple,
    height: '50%',
    margin: '3%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '80%',
    height: '80%',
  },
  containerTitle: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainerTitle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {color: primary.text, fontSize: 32, fontWeight: 'bold'},
  containerPredictin: {
    height: '70%',
    textAlignVertical: 'center',
    color: primary.text,
    fontSize: 15,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
});
