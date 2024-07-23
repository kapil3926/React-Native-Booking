import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constant/colors';
import {formatDate} from '../../../utils/helpers';
import AppText from '../../App/AppText/AppText';

const TrainCard = () => {
  const {
    params: {departureFrom, arrivalAt, date},
  } = useRoute() as any;
  const {stnCode: departureStnCode = 'DEL'} = departureFrom || {};
  const {stnCode: arrivalStnCode = 'BLR'} = arrivalAt || {};
  const {navigate} = useNavigation() as any;

  return (
    <Pressable
      onPress={() =>
        navigate('ConfirmTicket', {
          from: departureFrom,
          to: arrivalAt,
          date: formatDate(date),
        })
      }
      style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <AppText
            text={departureStnCode}
            fontSize={16}
            fontFamily="SemiBold"
          />
          <AppText text={'06:30'} fontSize={16} fontFamily="SemiBold" />
        </View>
        <AppText
          text={'04h 30m'}
          color="tertiary_purple"
          fontSize={16}
          fontFamily="SemiBold"
        />
        <View>
          <AppText text={arrivalStnCode} fontSize={16} fontFamily="SemiBold" />
          <AppText text={'10:45'} fontSize={16} fontFamily="SemiBold" />
        </View>
        <AppText
          text={'1300'}
          color="black"
          fontSize={26}
          fontFamily="SemiBold"
        />
      </View>
      <View style={styles.alignEnd}>
        <AppText
          fontFamily="Medium"
          fontSize={10}
          color="green"
          text="Use Code : Train60 and get 60% instant cashback"
        />
      </View>
    </Pressable>
  );
};

export default TrainCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    borderRadius: 12,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignEnd: {alignSelf: 'flex-end'},
});
