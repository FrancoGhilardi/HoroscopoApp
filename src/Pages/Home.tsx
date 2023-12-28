import React, {memo, useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primary} from '../../paletteColors.json';
import CardPrincipal from './PrincipalPage/CardPrincipal';
import List from './PrincipalPage/List';
import ButtonsFooter from './PrincipalPage/ButtonsFooter';
import {useGetList} from '../Services/Query';
import {addVideo} from '../Redux/Slice/videoSlice';
import {useDispatch} from 'react-redux';
import {IVideo, TZodialSings} from '../Services/interfaces';
import {addHoroscopo} from '../Redux/Slice/horoscopoSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useGetList();

  const arrayData = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data.zodiac_signs;
  }, [data]);

  const video = useMemo<IVideo | null>(() => {
    if (!data) {
      return null;
    }
    return data.videos[0];
  }, [data]);

  useEffect(() => {
    if (video && arrayData) {
      dispatch(addVideo(video));
      dispatch(addHoroscopo(arrayData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, arrayData]);

  return (
    <SafeAreaView style={styles.contianer}>
      <CardPrincipal />
      <List />
      <ButtonsFooter />
    </SafeAreaView>
  );
};
export default memo(Home);

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: primary.black,
    flex: 1,
  },
});
