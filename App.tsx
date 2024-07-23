import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './src/constant/colors';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.placeholder_bg} />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
