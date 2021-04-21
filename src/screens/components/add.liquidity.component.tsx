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
import {
  FONTSIZE_MEDIUM,
  FONTSIZE_SMALL,
  FONTSIZE_SUPER,
} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function AddLiquidityComponent() {
  return (
    <IView backgroundColor={Colors.WHITE}>
      <IView margin>
        <InputCoinComponent type="from" />
        <IView marginVertical center>
          <IText fontSize={FONTSIZE_MEDIUM} fontWeight="medium">
            +
          </IText>
        </IView>

        <InputCoinComponent type="to" />
        <ILine height={20} />
        <PrimaryButtonComponent
          onPress={() => {
            NavigationUtils.navigate(LIST_WALLET_SCREEN);
          }}>
          Connect wallet
        </PrimaryButtonComponent>
        <ILine height={20} />
        <IText fontWeight="medium">Tips:</IText>
        <IText color={Colors.TEXT_GRAY} fontSize={FONTSIZE_SMALL}>
          When you add liquidity, you will receive pool tokens representing your
          position. These tokens automatically earn fees proportional to your
          share of the pool, and can be redeemed at any time
        </IText>
      </IView>
    </IView>
  );
}
