import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constant/colors';
import {places_images} from '../../../constant/images';
import AppText from '../../App/AppText/AppText';

const WinterJourneyCard = ({index}: {index: number}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="resize"
        style={styles.imageContainer}
        imageStyle={styles.br8}
        source={{
          uri: places_images[index % places_images.length],
        }}>
        <View style={styles.mw80}>
          <AppText
            style={styles.justifyEnd}
            text="Shimla Best Kept Seceret"
            fontSize={14}
            color="white"
            fontFamily="SemiBold"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WinterJourneyCard;

const styles = StyleSheet.create({
  container: {
    width: 206,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
  },
  imageContainer: {
    height: 119,
    padding: 6,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column-reverse',
  },
  br8: {borderRadius: 8},
  mw80: {maxWidth: '90%'},
  justifyEnd: {justifyContent: 'flex-end'},
});
