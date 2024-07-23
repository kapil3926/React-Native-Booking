import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constant/colors';
import {offers, places_images} from '../../../constant/images';
import AppText from '../../App/AppText/AppText';

const BestOfferCard = ({index}: {index: number}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: places_images[index % places_images.length],
        }}
      />
      <AppText
        text={offers[index % offers.length]}
        fontSize={12}
        fontFamily="SemiBold"
      />
      <View style={styles.dicountText}>
        <AppText
          text={`Up to ${Math.round(Math.random() * 80)}% OFF*`}
          fontSize={12}
          fontFamily="Bold"
        />
        <AppText
          text="View Detail"
          fontSize={12}
          fontFamily="SemiBold"
          color="purple"
        />
      </View>
    </View>
  );
};

export default BestOfferCard;

const styles = StyleSheet.create({
  container: {
    width: 304,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
  },
  image: {height: 111, borderRadius: 8, marginBottom: 8},
  discountText: {flexDirection: 'row', justifyContent: 'space-between'},
});
