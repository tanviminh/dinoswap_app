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

export function CreatePairComponent() {
  return (
    <IView>
      <IView padding>
        <ITouch
          onPress={() => {
            NavigationUtils.pop();
          }}>
          <IIcon xml={Icons.BACK} size={24} fill={Colors.LIGHT_BROWN} />
        </ITouch>
        <ILine height={10} />

        <IText fontSize={FONTSIZE_SUPER} fontWeight="bold">
          Create a pair
        </IText>
        <ILine height={10} />
        <IText fontWeight="medium">You are the first liquidity provider.</IText>
        <IText color={Colors.TEXT_GRAY} fontSize={FONTSIZE_SMALL}>
          The ratio of tokens you add will set the price of this pool.{'\n'}Once
          you are happy with the rate click supply to review.
        </IText>
      </IView>

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
      </IView>
    </IView>
  );
}
