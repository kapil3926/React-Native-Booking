import React, {useRef} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../../constant/colors';
import AppText from '../AppText/AppText';

type Props = {
  text?: string;
  element?: React.ReactNode;
  onPress: () => void;
  variant?: 'Outlined' | 'Filled';
  width?: 'full' | 'flex';
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const AppButton: React.FC<Props> = ({
  text,
  element,
  variant = 'Filled',
  width = 'flex',
  style,
  onPress,
  disabled,
}) => {
  const isFilled = variant === 'Filled';
  const isFullWidth = width === 'full';

  const selectedAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(selectedAnim, {
      toValue: 0.92,
      damping: 20,

      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(selectedAnim, {
      toValue: 1,
      damping: 10,
      delay: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{transform: [{scale: selectedAnim}]}}>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.buttonContainer,
          isFilled && styles.filledButton,
          isFullWidth && styles.fullWidth,
          style,
        ]}>
        {element && element}
        {text && (
          <AppText
            fontSize={16}
            fontFamily="Medium"
            style={styles.textCenter}
            text={text}
            color={isFilled ? 'white' : 'purple'}
          />
        )}
      </Pressable>
    </Animated.View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.purple,
    borderWidth: 1,
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 6,
  },
  filledButton: {
    backgroundColor: COLORS.purple,
  },
  fullWidth: {
    alignSelf: 'auto',
  },
  textCenter: {textAlign: 'center'},
});
