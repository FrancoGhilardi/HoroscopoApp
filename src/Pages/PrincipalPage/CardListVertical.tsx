import React, {memo, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IZodialSings} from '../../Services/interfaces';
import {primary} from '../../../paletteColors.json';

interface ICardListVertical {
  row: IZodialSings;
}

const CardListVertical: React.FC<ICardListVertical> = ({row}) => {
  const name = useMemo<string>(() => row.name || '', [row.name]);

  const prediction = useMemo<string>(
    () => row.prediction || '',
    [row.prediction],
  );

  const image = useMemo<string>(() => row.image || '', [row.image]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.containerImage}>
          <Image style={styles.logo} source={{uri: image}} />
        </View>
        <View style={styles.containerTexts}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text numberOfLines={2} style={styles.textPrediction}>
            {prediction}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(CardListVertical);

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    height: '80%',
    width: '95%',
    flexDirection: 'row',
  },
  containerImage: {
    backgroundColor: primary.purple,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  containerTexts: {
    backgroundColor: primary.purple,
    marginLeft: '4%',
    width: '70%',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textTitle: {
    color: primary.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrediction: {
    color: primary.text,
    fontSize: 14,
    flexShrink: 1,
  },
  logo: {width: 50, height: 50},
});
