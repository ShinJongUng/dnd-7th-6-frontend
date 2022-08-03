import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothDetailScreen from './BoothDetailScreen';
import BoothScreen from './BoothScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothDetailScreen: undefined;
};

const RouteBoothScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Booth">
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothDetail" component={BoothDetailScreen} />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
