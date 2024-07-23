import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Modal, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constant/colors';
import AppButton from '../AppButton/AppButton';
import AppText from '../AppText/AppText';

const ConfirmTicketModal = () => {
  const {navigate} = useNavigation() as any;
  return (
    <Modal transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Image
            resizeMode="contain"
            style={styles.ticketImage}
            source={require('../../../assets/ticket.png')}
          />
          <AppText
            style={styles.textCenter}
            fontSize={16}
            fontFamily="SemiBold"
            text="Your E-Ticket is successfully saved in your device"
          />
          <View style={styles.alignCenter}>
            <AppButton
              style={styles.ph40}
              onPress={() => {
                navigate('Home');
              }}
              text="OK"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmTicketModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 60,
    paddingVertical: 20,
    margin: 20,
    gap: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ticketImage: {height: 72, width: 72},
  textCenter: {textAlign: 'center'},
  alignCenter: {alignSelf: 'center'},
  ph40: {paddingHorizontal: 40},
});
