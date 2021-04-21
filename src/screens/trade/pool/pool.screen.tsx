import {Images} from 'assets';
import {IImage, ILine, IScroll, IText, IView} from 'components';
import {ADD_LIQUIDITY_SCREEN, CREATE_PAIR_SCREEN} from 'navigations/routes';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {InputCoinComponent} from 'screens/components/input.coin.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {SecondaryButtonComponent} from 'screens/components/secondary.button.component';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {TradeToolbarComponent} from 'screens/components/trade.toolbar.component';
import {Colors} from 'styles';
import {FONTSIZE_SUPER} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function PoolScreen(props: any) {
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

        <IView fit>
          <IScroll>
            <Introduction />
          </IScroll>
        </IView>

        <TradeFooterComponent />
      </IView>
    </IView>
  );
}

function Introduction() {
  return (
    <IView>
      <IView width="100%" height="100%" style={{position: 'absolute'}}></IView>
      <IView padding={20}>
        <IText fontSize={FONTSIZE_SUPER} color={Colors.PINK} fontWeight="bold">
          Liquidity provider{'\n'}rewards
        </IText>
        <ILine height={10} />
        <IText color={Colors.WHITE}>
          Liquidity providers earn a 0.25% fee on all trades proportional to
          their share of the pool. Fees are added to the pool, accrue in real
          time and can be claimed by withdrawing your liquidity.
        </IText>
        <ILine height={10} />

        <IText fontWeight="bold" color={Colors.PINK}>
          Your liquidity
        </IText>
        <ILine height={20} />

        <SecondaryButtonComponent
          onPress={() => {
            NavigationUtils.navigate(CREATE_PAIR_SCREEN);
          }}>
          Create a pair
        </SecondaryButtonComponent>
        <ILine height={10} />

        <PrimaryButtonComponent
          onPress={() => {
            NavigationUtils.navigate(ADD_LIQUIDITY_SCREEN);
          }}>
          Add Liquidity
        </PrimaryButtonComponent>
        <ILine height={20} />
      </IView>
    </IView>
  );
}
