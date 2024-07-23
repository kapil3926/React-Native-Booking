import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import AppText from '../App/AppText/AppText';
import WinterJourneyCard from '../Cards/WinterJourneyCard';

const WinterJourney = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppText fontSize={22} fontFamily="SemiBold" text="Winter Journey" />
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
        renderItem={({index}) => <WinterJourneyCard index={index} />}
      />
    </View>
  );
};

export default WinterJourney;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentContainer: {gap: 16, padding: 20},
});
