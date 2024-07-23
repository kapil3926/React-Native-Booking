import React from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {Colors, COLORS} from '../../../constant/colors';
import {FontFamily} from '../../../constant/fonts';

type Props = {
  placeholder: string;
  value: string | number;
  onChangeText?: (v: string) => void;
  icon?: any;
  editable?: boolean;
  bgColor?: Colors;
  style?: TextInputProps['style'];
  keyboardType?: KeyboardTypeOptions;
  onEndEditing?: () => void;
};

const AppTextInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  icon,
  style,
  editable,
  bgColor,
  keyboardType = 'default',
  onEndEditing,
}) => {
  const isIos = Platform.OS === 'ios';
  return (
    <View
      style={[
        styles.textinputContainer,
        bgColor && {backgroundColor: COLORS[bgColor]},
      ]}>
      {icon && icon}
      <TextInput
        onEndEditing={onEndEditing}
        keyboardType={keyboardType}
        cursorColor={COLORS.purple}
        editable={editable}
        style={[styles.textinput, isIos && styles.iosPadding, style]}
        placeholderTextColor={COLORS.placeholder_text}
        onChangeText={onChangeText}
        value={value?.toString()}
        placeholder={placeholder}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  textinputContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.placeholder_stroke,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    maxWidth: '100%',
    backgroundColor: COLORS.placeholder_bg,
  },
  textinput: {
    width: '100%',
    maxWidth: '100%',
    fontFamily: FontFamily.Regular,
    // fontSize: 12,
    color: COLORS.black,
  },
  iosPadding: {paddingVertical: 12},
});
