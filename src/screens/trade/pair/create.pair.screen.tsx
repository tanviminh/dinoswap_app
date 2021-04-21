import {Images} from 'assets';
import {IImage, ILine, IScroll, IView} from 'components';
import React from 'react';
import {StatusBar} from 'react-native';
import {CreatePairComponent} from 'screens/components/create.pair.component';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {TradeToolbarComponent} from 'screens/components/trade.toolbar.component';
import {Colors} from 'styles';

export function CreatePairScreen(props: any) {
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
    <IView backgroundColor={Colors.WHITE} margin borderRadius>
      <CreatePairComponent />
    </IView>
  );
}
