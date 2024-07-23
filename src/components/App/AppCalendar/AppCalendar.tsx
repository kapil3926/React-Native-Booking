import React from 'react';
import {Modal, Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {Calendar, CalendarProps, DateData} from 'react-native-calendars';
import {COLORS} from '../../../constant/colors';
import {FontFamily} from '../../../constant/fonts';
import AppText from '../AppText/AppText';

type Props = {
  onRequestClose: () => void;
  onDateSelect: (date: string) => void;
  selectedDate: string;
};

const AppCalendar: React.FC<Props> = ({
  onDateSelect,
  selectedDate,
  onRequestClose,
}) => {
  return (
    <Modal animationType="fade" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Pressable onPress={onRequestClose} style={styles.closeButton}>
            <AppText text="X" color="white" fontFamily="Bold" />
          </Pressable>
          <Calendar
            initialDate={selectedDate}
            enableSwipeMonths
            style={{borderRadius: 20} as ViewStyle}
            markedDates={{[selectedDate]: {selected: true}}}
            minDate={new Date().toString()}
            onDayPress={(date: DateData) => {
              onDateSelect(date.dateString);
            }}
            theme={CALENDAR_THEME}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AppCalendar;

const CALENDAR_THEME: CalendarProps['theme'] = {
  backgroundColor: COLORS.placeholder_bg,
  calendarBackground: COLORS.placeholder_bg,
  selectedDayBackgroundColor: COLORS.purple,
  selectedDayTextColor: COLORS.white,
  todayTextColor: COLORS.purple,
  dayTextColor: COLORS.black,
  textDisabledColor: COLORS.text_gray,
  selectedDotColor: COLORS.white,
  arrowColor: COLORS.tertiary_purple,
  monthTextColor: COLORS.purple,
  textDayFontFamily: FontFamily.Bold,
  textMonthFontFamily: FontFamily.Bold,
  textDayHeaderFontFamily: FontFamily.Bold,
  textDayFontSize: 14,
  textMonthFontSize: 14,
  textDayHeaderFontSize: 12,
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContainer: {
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    zIndex: 1,
    borderRadius: 25,
    backgroundColor: COLORS.purple,
  },
});
