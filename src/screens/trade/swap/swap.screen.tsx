import {Icons, Images} from 'assets';
import {IIcon, IImage, ILine, IScroll, IText, ITouch, IView} from 'components';
import {
  ALERT_SCREEN,
  SEARCH_COIN_SCREEN,
  SETTING_SWAP_SCREEN,
} from 'navigations/routes';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputCoinComponent} from 'screens/components/input.coin.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {SwapComponent} from 'screens/components/swap.component';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {TradeToolbarComponent} from 'screens/components/trade.toolbar.component';
import {Colors} from 'styles';
import {LIGHT_GRAY} from 'styles/colors';
import {FONTSIZE_SMALL, FONTSIZE_SUPER} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function SwapScreen(props: any) {
  const {navitagion} = props;

  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <StatusBar barStyle="dark-content" />
      <IView fit>
        <IImage
          style={{position: 'absolute'}}
          width="100%"
          height="100%"
          source={Images.TRADE_BACKGROUND}
          resizeMode="cover"
        />
        <TradeToolbarComponent {...props} />
        <ILine height={10} />
        <IView fit>
          <IScroll>
            <Content />
          </IScroll>
        </IView>
        <TradeFooterComponent />
      </IView>
    </IView>
  );
}

function Content() {
  return (
    <IView
      backgroundColor={Colors.WHITE}
      margin
      borderRadius
      style={{overflow: 'hidden'}}>
      <IView horizontal spaceBetween centerVertical padding>
        <IText fontSize={FONTSIZE_SUPER} fontWeight="bold">
          Swap
        </IText>
        <ITouch
          padding
          onPress={() => {
            NavigationUtils.navigate(SETTING_SWAP_SCREEN);
          }}>
          <IIcon xml={Icons.SETTING} size={24} fill={Colors.LIGHT_BROWN} />
        </ITouch>
      </IView>
      <SwapComponent />
    </IView>
  );
}
