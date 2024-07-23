import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../../constant/colors';
import {FontFamily} from '../../../constant/fonts';
import {stations} from '../../../data/stations';
import AppText from '../AppText/AppText';

type Props = {
  selectedCity?: (typeof stations)[0];
  setSelectedCity: (station: (typeof stations)[0]) => void;
  placeholder: string;
};

const SearchableTextInput: React.FC<Props> = ({
  selectedCity,
  setSelectedCity,
  placeholder,
}) => {
  return (
    <View>
      <Dropdown
        style={styles.container}
        renderRightIcon={() => <></>}
        value={selectedCity}
        onChange={setSelectedCity}
        labelField="stnName"
        valueField="stnCode"
        search
        selectedTextStyle={styles.activeText}
        itemTextStyle={styles.itemText}
        data={stations}
        inputSearchStyle={styles.inputText}
        placeholder={placeholder}
        placeholderStyle={styles.placeholderText}
        containerStyle={styles.dropdownContainer}
        renderItem={({stnCode, stnName}) => {
          let isSelected = stnCode === selectedCity?.stnCode;
          return (
            <View style={styles.pd10}>
              <AppText
                color={isSelected ? 'purple' : 'black'}
                fontSize={16}
                fontFamily={'Bold'}
                text={stnCode + '-' + stnName}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchableTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    borderColor: COLORS.placeholder_stroke,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: COLORS.placeholder_bg,
  },
  activeText: {
    fontFamily: FontFamily.Regular,
    color: COLORS.black,
  },
  itemText: {fontFamily: FontFamily.Bold, fontSize: 14},
  inputText: {
    fontFamily: FontFamily.SemiBold,
    color: COLORS.black,
  },
  placeholderText: {
    fontFamily: FontFamily.Regular,
    fontSize: 14,
    color: COLORS.placeholder_text,
  },
  dropdownContainer: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  pd10: {padding: 10},
});
