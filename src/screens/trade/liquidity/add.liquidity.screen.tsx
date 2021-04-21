import {Icons, Images} from 'assets';
import {IIcon, IImage, ILine, IScroll, IText, ITouch, IView} from 'components';
import React from 'react';
import {StatusBar} from 'react-native';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {TradeToolbarComponent} from 'screens/components/trade.toolbar.component';
import {AddLiquidityComponent} from 'screens/components/add.liquidity.component';
import {Colors} from 'styles';
import {NavigationUtils} from 'utils';
import {Text} from 'react-native-svg';
import {FONTSIZE_SUPER} from 'styles/typography';

export function AddLiquidityScreen(props: any) {
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
      <IView padding>
        <ITouch
          onPress={() => {
            NavigationUtils.pop();
          }}>
          <IIcon xml={Icons.BACK} size={24} fill={Colors.LIGHT_BROWN} />
        </ITouch>
        <ILine height={10} />

        <IText fontSize={FONTSIZE_SUPER} fontWeight="bold">
          Add Liquidity
        </IText>
      </IView>
      <AddLiquidityComponent />
    </IView>
  );
}
