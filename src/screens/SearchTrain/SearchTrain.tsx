import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppText from '../../components/App/AppText/AppText';
import TrainCard from '../../components/Cards/TrainCard';
import {COLORS} from '../../constant/colors';
import {formatDate} from '../../utils/helpers';

const SearchTrain = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.purple} />
      <FlatList
        bounces={false}
        ListHeaderComponent={Header}
        contentContainerStyle={styles.trainContentContainer}
        data={new Array(7).fill('')}
        renderItem={() => <TrainCard />}
      />
    </>
  );
};

export default SearchTrain;

const Header = () => {
  const {goBack} = useNavigation();
  const {
    params: {date, departureFrom, arrivalAt, noOfAdults},
  } = useRoute() as any;
  return (
    <ImageBackground
      style={styles.trainTopImage}
      source={require('../../assets/TrainTop.png')}>
      <Pressable onPress={goBack}>
        <Image
          style={styles.backImage}
          source={require('../../assets/back.png')}
        />
      </Pressable>
      <View style={styles.alignCenter}>
        <AppText
          fontFamily="Medium"
          color="white"
          fontSize={16}
          text={formatDate(date)}
        />
      </View>
      <View style={styles.rowBetween}>
        <View style={styles.column}>
          <AppText
            fontFamily="Bold"
            color="white"
            fontSize={36}
            text={departureFrom?.stnCode?.toUpperCase()?.slice(0, 3) || 'DEL'}
          />

          <AppText
            fontFamily="Regular"
            color="white"
            fontSize={8}
            text={departureFrom?.stnName || 'Delhi Terminal'}
          />
        </View>

        <View style={styles.column}>
          <AppText
            fontFamily="Bold"
            color="white"
            fontSize={36}
            text={arrivalAt?.stnCode?.toUpperCase()?.slice(0, 3) || 'BLR'}
          />
          <AppText
            fontFamily="Regular"
            color="white"
            fontSize={8}
            text={arrivalAt?.stnName || 'Banglore Terminal'}
          />
        </View>
      </View>
      <View style={styles.alignCenter}>
        <AppText
          fontFamily="SemiBold"
          color="white"
          fontSize={16}
          text="04h 30m"
        />
      </View>
      <View style={styles.adultContainer}>
        <Image
          resizeMode="contain"
          style={styles.adultImage}
          source={require('../../assets/adult.png')}
        />
        <AppText
          fontFamily="SemiBold"
          color="white"
          fontSize={16}
          text={`${
            noOfAdults < 10 ? '0' + noOfAdults : noOfAdults || '01'
          }  Adult`}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  trainContentContainer: {gap: 16, paddingBottom: 20},
  trainTopImage: {
    height: 244,
    paddingHorizontal: 20,
    ...(Platform.OS === 'ios' && {paddingVertical: 40}),
  },
  backImage: {height: 30, width: 30},
  alignCenter: {alignSelf: 'center'},
  rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  column: {flexDirection: 'column'},
  trainTravelImage: {position: 'absolute', height: '100%', width: '95%'},
  adultContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    padding: 20,
  },
  adultImage: {height: 24, width: 24},
});
