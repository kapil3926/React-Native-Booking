import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppButton from '../../components/App/AppButton/AppButton';
import AppText from '../../components/App/AppText/AppText';
import ConfirmTicketModal from '../../components/App/ConfirmTickerModal';
import {COLORS} from '../../constant/colors';

const ConfirmTicket = () => {
  const {goBack} = useNavigation();
  const {
    params: {from, to, date},
  } = useRoute() as any;
  const {
    stnCode: dstnCode = 'DEL',
    stnName: dstnName = 'Delhi Railway Station',
  } = from || {};
  const {
    stnCode: astnCode = 'BLR',
    stnName: astnName = 'Banglore Railway Station',
  } = to || {};
  const [showTicketModal, setShowConfirmModal] = useState(false);
  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar backgroundColor={COLORS.purple} />
      {showTicketModal && <ConfirmTicketModal />}
      <ImageBackground
        style={styles.trainTopImage}
        source={require('../../assets/TrainTop.png')}>
        <Pressable onPress={goBack}>
          <Image
            style={styles.backImage}
            source={require('../../assets/back.png')}
          />
        </Pressable>
      </ImageBackground>
      <ImageBackground
        resizeMethod="resize"
        borderRadius={10}
        source={require('../../assets/curvedImage.png')}
        style={styles.curvedImage}>
        <View style={styles.alignCenter}>
          <AppText fontSize={14} fontFamily="SemiBold" text={date} />
        </View>
        <View style={styles.rowBetween}>
          <View>
            <AppText text={dstnCode} fontSize={26} fontFamily="Bold" />
            <AppText text={dstnName} fontSize={6} />
          </View>
          <View>
            <AppText text={astnCode} fontSize={26} fontFamily="Bold" />
            <AppText text={astnName} fontSize={6} />
          </View>
        </View>
        <View style={styles.alignCenter}>
          <AppText text="04h 30m" fontSize={12} fontFamily="SemiBold" />
        </View>
        <View style={styles.rowBetween}>
          <View>
            <AppText text="Passenger Name" fontSize={10} color="text_gray" />
            <AppText text="ABC XYZ" fontSize={16} fontFamily="SemiBold" />
          </View>
          <View>
            <AppText text="Train Type" fontSize={10} color="text_gray" />
            <AppText
              text="3 AC - Sleeper "
              fontSize={16}
              fontFamily="SemiBold"
            />
          </View>
          <View>
            <AppText text="Train Code" fontSize={10} color="text_gray" />
            <AppText text="A-605029" fontSize={16} fontFamily="SemiBold" />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View>
            <AppText text="Boarding Time" fontSize={10} color="text_gray" />
            <AppText text="06:15 AM" fontSize={16} fontFamily="SemiBold" />
          </View>
          <View>
            <AppText text="Platform Number" fontSize={10} color="text_gray" />
            <AppText text="3" fontSize={16} fontFamily="SemiBold" />
          </View>
          <View>
            <AppText text="Seat Number" fontSize={10} color="text_gray" />
            <AppText text="13" fontSize={16} fontFamily="SemiBold" />
          </View>
        </View>
        <View style={styles.dashedLine} />
        <Image
          resizeMode="contain"
          style={styles.barcodeImage}
          source={require('../../assets/barcode.png')}
        />
        <AppText
          style={styles.textCenter}
          text="1  2  5  8  4  6  2  4  2  7  5  3  1  3  5  0  6  7  5  9"
          fontSize={14}
          fontFamily="SemiBold"
        />
      </ImageBackground>
      <View style={styles.pd20}>
        <AppButton
          width="full"
          text="Download E-Ticket"
          onPress={() => setShowConfirmModal(true)}
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmTicket;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.placeholder_bg},
  trainTopImage: {
    height: 240,
    width: '100%',
    ...(Platform.OS === 'ios' && {paddingVertical: 20}),
  },
  backImage: {
    height: 30,
    width: 30,
    marginHorizontal: 20,
    ...(Platform.OS === 'ios' && {marginVertical: 20}),
  },
  curvedImage: {
    padding: 20,
    gap: 26,
    top: -50,
    marginHorizontal: 20,
    elevation: 4,
  },
  rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  dashedLine: {
    overflow: 'hidden',
    marginTop: 60,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderStyle: 'dashed',
  },
  barcodeImage: {height: 88, width: '100%'},
  pd20: {paddingBottom: 20, paddingHorizontal: 20},
  alignCenter: {alignSelf: 'center'},
  textCenter: {textAlign: 'center'},
});
