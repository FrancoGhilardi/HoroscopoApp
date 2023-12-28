import React, {ReactElement, memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {IZodialSings, TZodialSings} from '../../Services/interfaces';
import CardListVertical from './CardListVertical';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';

const List: React.FC = () => {
  const data = useSelector<RootState, TZodialSings>(
    state => state.horoscopo.zodiac_signs,
  );

  const arrayList = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data;
  }, [data]);

  const renderItem = useCallback(
    (item: ListRenderItemInfo<IZodialSings>): ReactElement => (
      <CardListVertical row={item.item} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList data={arrayList} renderItem={renderItem} />
    </View>
  );
};

export default memo(List);

const styles = StyleSheet.create({
  container: {height: '35%'},
});
