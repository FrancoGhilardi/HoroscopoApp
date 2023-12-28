import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../paletteColors.json';

const ButtonsFooter: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Ordenar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, styles.buttonCenter]}>
          <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Vista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ButtonsFooter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: primary.white,
    width: '80%',
    height: '60%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    width: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  buttonCenter: {borderLeftWidth: 1, borderRightWidth: 1},
  text: {color: primary.black, fontSize: 16, flexShrink: 1},
});
