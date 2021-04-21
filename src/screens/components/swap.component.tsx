import {Icons, Images} from 'assets';
import {IIcon, IImage, ILine, IScroll, IText, ITouch, IView} from 'components';
import {
  ALERT_SCREEN,
  LIST_WALLET_SCREEN,
  SEARCH_COIN_SCREEN,
  SETTING_SWAP_SCREEN,
} from 'navigations/routes';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputCoinComponent} from 'screens/components/input.coin.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {TradeToolbarComponent} from 'screens/components/trade.toolbar.component';
import {Colors} from 'styles';
import {LIGHT_GRAY} from 'styles/colors';
import {FONTSIZE_SMALL, FONTSIZE_SUPER} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function SwapComponent() {
  const informations = [
    {
      key: 'Max sold',
      value: '28.188 ETH per WBTC',
      icon: Icons.SWAP,
      onPress: () => {
        NavigationUtils.navigate(ALERT_SCREEN);
      },
    },
    {
      key: 'Min Received',
      value: '0.03529 WBTC',
      icon: Icons.QUESTION,
      onPress: () => {
        NavigationUtils.navigate(ALERT_SCREEN);
      },
    },
    {
      key: 'Price Impact',
      value: '<0.01%',
      icon: Icons.QUESTION,
      onPress: () => {
        NavigationUtils.navigate(ALERT_SCREEN);
      },
    },
    {
      key: 'Fee',
      value: '0.003 ETH',
      icon: Icons.QUESTION,
      onPress: () => {
        NavigationUtils.navigate(ALERT_SCREEN);
      },
    },
  ];
  return (
    <IView backgroundColor={Colors.WHITE}>
      <IView margin>
        <InputCoinComponent type="from" />
        <IView marginVertical center>
          <IIcon xml={Icons.DOWN} size={24} fill={Colors.BROWN} />
        </IView>

        <InputCoinComponent type="to" />
        <ILine height={10} />
        {informations.map((item, index) => {
          return (
            <IView key={index} marginTop>
              <IView horizontal centerVertical>
                <IView fit>
                  <IText fontSize={FONTSIZE_SMALL} color={LIGHT_GRAY}>
                    {item.key}
                  </IText>
                </IView>
                <IView fit={1.5} horizontal spaceBetween centerVertical>
                  <IText
                    fontSize={FONTSIZE_SMALL}
                    color={LIGHT_GRAY}
                    fontWeight="bold">
                    {item.value}
                  </IText>
                  <ITouch onPress={item.onPress}>
                    <IIcon xml={item.icon} size={16} fill={Colors.LIGHT_GRAY} />
                  </ITouch>
                </IView>
              </IView>
            </IView>
          );
        })}
        <ILine height={20} />
        <PrimaryButtonComponent
          onPress={() => {
            NavigationUtils.navigate(LIST_WALLET_SCREEN);
          }}>
          Connect wallet
        </PrimaryButtonComponent>
      </IView>
    </IView>
  );
}
