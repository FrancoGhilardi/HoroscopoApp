import React, {ReactElement, memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {useGetList} from '../../Services/Query';
import {IZodialSings, TZodialSings} from '../../Services/interfaces';
import CardListVertical from './CardListVertical';

const List: React.FC = () => {
  const {data} = useGetList();
  const arrayList = useMemo<TZodialSings>(() => {
    if (!data) {
      return [];
    }
    return data.zodiac_signs;
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
