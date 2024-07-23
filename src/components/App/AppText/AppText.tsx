import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {Colors, COLORS} from '../../../constant/colors';
import {FontFamily, Fonts} from '../../../constant/fonts';

type Props = {
  text: string | React.ReactNode;
  fontFamily?: Fonts;
  fontSize?: number;
  color?: Colors;
  style?: StyleProp<TextStyle>;
};

const AppText: React.FC<Props> = ({
  text,
  fontFamily = 'Regular',
  fontSize,
  color = 'black',
  style,
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: FontFamily[fontFamily],
          fontSize,
          color: COLORS[color],
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default AppText;
