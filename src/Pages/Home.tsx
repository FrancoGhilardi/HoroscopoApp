import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primary} from '../../paletteColors.json';
import CardPrincipal from './PrincipalPage/CardPrincipal';
import List from './PrincipalPage/List';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.contianer}>
      <CardPrincipal />
      <List />
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
