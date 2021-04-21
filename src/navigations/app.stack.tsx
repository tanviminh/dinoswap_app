import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {AppScreen} from 'screens/app';
import {SeePairScreen} from 'screens/app/farm/see.pair.screen';
import {GovernanceScreen} from 'screens/app/governance';
import {APP_SCREEN, GOVERNANCE_SCREEN, SEE_PAIR_SCREEN} from './routes';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={APP_SCREEN}>
      <Stack.Screen name={APP_SCREEN} component={AppScreen} />
      <Stack.Screen name={GOVERNANCE_SCREEN} component={GovernanceScreen} />
      <Stack.Screen name={SEE_PAIR_SCREEN} component={SeePairScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
