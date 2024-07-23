import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import AppText from '../App/AppText/AppText';
import BestOfferCard from '../Cards/BestOfferCard';

const BestOffers = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <AppText fontSize={22} fontFamily="SemiBold" text="Best Offers" />
        <AppText
          fontSize={12}
          fontFamily="SemiBold"
          color="purple"
          text="See all"
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        data={new Array(10).fill('')}
        renderItem={({index}) => <BestOfferCard index={index} />}
      />
    </View>
  );
};

export default BestOffers;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentContainer: {gap: 16, paddingHorizontal: 20},
});
