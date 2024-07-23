import React from 'react';
import {StyleSheet, View} from 'react-native';

const Seperator = () => {
  return <View style={style.seperator} />;
};

export default Seperator;

const style = StyleSheet.create({
  seperator: {height: 1, backgroundColor: '#D6D6D6', width: '100%'},
});
