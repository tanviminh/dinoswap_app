import {Images} from 'assets';
import {IGradient, IImage, ILine, IScroll, IText, IView} from 'components';
import {DOC_URL} from 'consts';
import {APP_STACK} from 'navigations/routes';
import React from 'react';
import {FooterComponent} from 'screens/components/footer.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {SecondaryButtonComponent} from 'screens/components/secondary.button.component';
import {Colors} from 'styles';
import {
  FONTSIZE_LARGE,
  FONTSIZE_SUPER,
  RADIUS_ORIGIN,
  SHADOW,
} from 'styles/typography';
import {BrowserUtils, NavigationUtils} from 'utils';
import {HomeToolbarComponent} from '../components/home.toolbar.component';

export function HomeScreen(props: any) {
  const {navitagion} = props;
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView style={{flex: 1}}>
        <HomeToolbarComponent {...props} />
        <ILine height={10} />

        <IScroll>
          <Introduction />
          <ILine height={20} />
          <Growth />
          <IView margin>
            <FooterComponent />
          </IView>
        </IScroll>
      </IView>
    </IView>
  );
}

function Introduction() {
  return (
    <IView margin borderRadius style={{overflow: 'hidden'}}>
      <IView width="100%" height="100%" style={{position: 'absolute'}}>
        <IImage
          source={Images.HOME_BACKGROUND}
          width="100%"
          height="100%"
          resizeMode="cover"
        />
      </IView>
      <IView padding={20}>
        <IText fontSize={FONTSIZE_SUPER} color={Colors.PINK} fontWeight="bold">
          Becoming a{'\n'}dinorsaur with{'\n'}DINOEX
        </IText>
        <ILine height={10} />
        <IText color={Colors.WHITE}>
          The Dino Exchange protocol realigns incentives for network
          participants by introducing revenue sharing and forum-driven network
          efforts to the popular AMM model.
        </IText>
        <ILine height={20} />
        <PrimaryButtonComponent
          onPress={() => {
            NavigationUtils.reset(APP_STACK);
          }}>
          Enter app
        </PrimaryButtonComponent>
        <ILine height={10} />

        <SecondaryButtonComponent
          onPress={() => {
            BrowserUtils.openLink(DOC_URL);
          }}>
          Learn more
        </SecondaryButtonComponent>
        <ILine height={20} />
        <IView centerHorizontal>
          <IImage
            source={Images.EGGS}
            width={200}
            height={200}
            resizeMode="contain"
          />
        </IView>
      </IView>
    </IView>
  );
}

function Growth() {
  const items = [
    {
      key: 'liquidity',
      value: '4.48b',
    },
    {
      key: 'Total Fees',
      value: '136.727.670',
    },
    {
      key: 'Pairs',
      value: '919',
    },
    {
      key: 'Total Volume',
      value: '44.48b',
    },
  ];
  return (
    <IView padding>
      <IText fontSize={FONTSIZE_SUPER} fontWeight="bold">
        Growth with{'\n'}Dino Exchange!
      </IText>

      <ILine height={10} />
      <IView>
        <IGradient>
          <IView padding>
            <IText
              fontSize={FONTSIZE_LARGE}
              fontWeight="bold"
              color={Colors.PINK}>
              1 DinoEX =
            </IText>
            <ILine height={20} />
            <IText
              fontSize={FONTSIZE_SUPER * 2}
              fontWeight="medium"
              color={Colors.WHITE}>
              130$
            </IText>
          </IView>
        </IGradient>
      </IView>
      {items.map((item, index) => {
        return (
          <IView
            key={index}
            marginTop
            elevation={SHADOW}
            padding
            borderRadius={RADIUS_ORIGIN}
            backgroundColor={Colors.WHITE}>
            <IText color={Colors.SECONDARY}>{item.key}</IText>
            <ILine height={10} />
            <IText fontWeight="medium" fontSize={FONTSIZE_LARGE}>
              {item.value}
            </IText>
          </IView>
        );
      })}
    </IView>
  );
}
