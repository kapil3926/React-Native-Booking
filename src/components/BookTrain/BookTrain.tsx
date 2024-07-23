import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {COLORS} from '../../constant/colors';
import {stations} from '../../data/stations';
import AppButton from '../App/AppButton/AppButton';
import AppCalendar from '../App/AppCalendar/AppCalendar';
import AppText from '../App/AppText/AppText';
import AppTextInput from '../App/AppTextInput/AppTextInput';
import SearchableTextInput from '../App/SearchableTextInput/SearchableTextInput';
import Seperator from '../App/Seperator/Seperator';
type Station = (typeof stations)[0];

const BookTrain = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [departureFrom, setDepartureFrom] = useState<Station>();
  const [noOfAdults, setNoOfAdults] = useState(1);
  const [arrivalAt, setArrivalAt] = useState<Station>();
  const {navigate} = useNavigation() as any;
  const handleInterchange = () => {
    setDepartureFrom(arrivalAt);
    setArrivalAt(departureFrom);
  };

  return (
    <View style={styles.container}>
      <View style={styles.alignCenter}>
        <AppText fontSize={18} fontFamily="Bold" text="Book your Train" />
      </View>
      <View>
        <AppText fontSize={12} fontFamily="Medium" text="From" />
        <SearchableTextInput
          selectedCity={departureFrom}
          placeholder="Choose Departure from"
          setSelectedCity={setDepartureFrom}
        />
      </View>
      <View>
        <AppButton
          onPress={handleInterchange}
          style={styles.arrowButtonContainer}
          element={
            <Image
              style={styles.buttonImage}
              source={require('../../assets/updown_arrow.png')}
            />
          }
        />
        <AppText fontSize={12} fontFamily="Medium" text="To" />
        <SearchableTextInput
          selectedCity={arrivalAt}
          placeholder="Choose Arrival at"
          setSelectedCity={setArrivalAt}
        />
      </View>
      <Seperator />
      <View>
        <AppText fontSize={12} fontFamily="Medium" text="Departure Date" />

        <View style={styles.dateContentContainer}>
          <AppTextInput
            editable={false}
            value={selectedDate}
            style={styles.w80}
            placeholder="Choose your Date"
          />
          <AppButton
            onPress={() => {
              setShowDateModal(true);
            }}
            style={styles.dateImageContainer}
            element={
              <Image
                style={styles.buttonImage}
                source={require('../../assets/date.png')}
              />
            }
          />
        </View>
      </View>
      {showDateModal && (
        <AppCalendar
          selectedDate={selectedDate}
          onRequestClose={() => setShowDateModal(false)}
          onDateSelect={date => {
            setSelectedDate(date);
            setShowDateModal(false);
          }}
        />
      )}
      <Seperator />
      <AppText text="Adult (12+)" fontFamily="Medium" fontSize={12} />
      <View style={styles.adultContainer}>
        <AppButton
          disabled={noOfAdults === 1}
          text="-"
          onPress={() => {
            setNoOfAdults(p => p - 1);
          }}
          variant="Outlined"
          style={styles.adultButton}
        />
        <View style={styles.w15}>
          <AppTextInput
            placeholder=""
            editable={false}
            style={[
              styles.adultTextinput,
              Platform.OS === 'ios' && styles.iosPadding,
            ]}
            value={noOfAdults < 10 ? '0' + noOfAdults : noOfAdults}
          />
        </View>
        <AppButton
          text="+"
          onPress={() => {
            setNoOfAdults(p => p + 1);
          }}
          style={styles.adultButton}
        />
      </View>
      <AppButton
        onPress={() => {
          navigate('SearchTrain', {
            date: selectedDate,
            departureFrom,
            arrivalAt,
            noOfAdults,
          });
        }}
        width="full"
        variant="Outlined"
        text="Search Train"
      />
    </View>
  );
};

export default BookTrain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 20,
    borderRadius: 12,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  arrowButtonContainer: {
    borderRadius: 25,
    alignSelf: 'center',
  },
  buttonImage: {height: 25, width: 25},
  dateContentContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  dateImageContainer: {borderRadius: 10, alignSelf: 'center'},
  adultContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  adultButton: {paddingHorizontal: 10, paddingVertical: 2},
  w15: {width: '15%'},
  adultTextinput: {fontSize: 12, padding: 3},
  iosPadding: {height: 10},
  alignCenter: {alignSelf: 'center'},
  w80: {maxWidth: '80%'},
});
