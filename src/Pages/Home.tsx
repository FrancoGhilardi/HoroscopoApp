import React, {memo, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetList} from '../Services/Query';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primary} from '../../paletteColors.json';
import {useDispatch} from 'react-redux';
import {addHoroscopo} from '../Redux/Slice/horoscopoSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  //-- Get List Horoscopo --/
  const {data} = useGetList();

  useEffect(() => {
    dispatch(addHoroscopo(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <SafeAreaView style={styles.contianer}>
      <View>
        <Text style={styles.text}>a</Text>
      </View>
    </SafeAreaView>
  );
};
export default memo(Home);

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: primary.black,
    flex: 1,
  },
  text: {color: primary.text},
});
