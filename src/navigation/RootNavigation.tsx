import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmTicket from '../screens/ConfirmTicket/ConfirmTicket';
import Home from '../screens/Home/Home';
import SearchTrain from '../screens/SearchTrain/SearchTrain';

const {Navigator, Screen} = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="SearchTrain" component={SearchTrain} />
        <Screen name="ConfirmTicket" component={ConfirmTicket} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
