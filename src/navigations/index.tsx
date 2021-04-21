import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text, TextPropTypes, TextProps, Platform} from 'react-native';
import {AlertScreen} from 'screens/commons/alert.screen';
import {LanguageScreen} from 'screens/commons/language.screen';
import {OptionScreen} from 'screens/commons/option.screen';
import {SettingSwapScreen} from 'screens/trade/swap/setting.swap.screen';
import {ListWalletScreen} from 'screens/wallet/list.wallet.screen';
import {SearchCoinScreen} from 'screens/wallet/search.coin.screen';
import {navigationRef} from 'utils/navigation.utils';
import AppStack from './app.stack';
import HomeStack from './home.stack';
import {
  HOME_STACK,
  ALERT_SCREEN,
  TRADE_STACK,
  SETTING_SWAP_SCREEN,
  SEARCH_COIN_SCREEN,
  LIST_WALLET_SCREEN,
  LANGUAGE_SCREEN,
  APP_STACK,
  OPTION_SCREEN,
} from './routes';
import TradeStack from './trade.stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        mode="modal"
        screenOptions={ScreenOptions()}
        initialRouteName={HOME_STACK}>
        <Stack.Screen name={HOME_STACK} component={HomeStack} />
        <Stack.Screen name={TRADE_STACK} component={TradeStack} />
        <Stack.Screen name={APP_STACK} component={AppStack} />

        {/* Modal */}
        <Stack.Screen name={SEARCH_COIN_SCREEN} component={SearchCoinScreen} />
        <Stack.Screen name={LIST_WALLET_SCREEN} component={ListWalletScreen} />
        <Stack.Screen
          name={ALERT_SCREEN}
          component={AlertScreen}
          options={{
            cardStyle: {backgroundColor: 'transparent', opacity: 1},
            cardOverlayEnabled: false,
          }}
        />
        <Stack.Screen name={OPTION_SCREEN} component={OptionScreen} />
        <Stack.Screen name={LANGUAGE_SCREEN} component={LanguageScreen} />
        <Stack.Screen
          name={SETTING_SWAP_SCREEN}
          component={SettingSwapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ScreenOptions() {
  let options: any = {};
  options.cardStyle = {backgroundColor: 'transparent'};
  options.cardOverlayEnabled = true;
  if (Platform.OS == 'android') {
    options.cardStyleInterpolator = (style: any) => {
      let progress: any = style.current.progress;
      return {
        cardStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
          }),
        },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [1, 1],
            outputRange: [0, 0],
            extrapolate: 'clamp',
          }),
        },
      };
    };
  }
  return options;
}

export default App;
