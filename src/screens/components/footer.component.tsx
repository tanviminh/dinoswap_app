import {Icons} from 'assets';
import {IIcon, ILine, IText, IView} from 'components';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'styles';
import {PADDING, RADIUS_ORIGIN, SHADOW} from 'styles/typography';

interface Props {}

export function FooterComponent(props: Props) {
  return (
    <IView>
      <SafeAreaView>
        <IView
          elevation={SHADOW}
          padding={20}
          borderRadius={RADIUS_ORIGIN}
          backgroundColor={Colors.WHITE}>
          <IIcon xml={Icons.LOGO_DARK} width={140} height={34} />
          <ILine height={10} />
          <IText color={Colors.TEXT_GRAY}>
            An automated market-making (AMM) decentralized exchange (DEX)
            currently on the BSC blockchain
          </IText>
          <ILine height={10} />

          <IText fontWeight="bold">Contact us</IText>
          <ILine height={4} />
          <IView horizontal>
            <IIcon xml={Icons.FACEBOOK} size={24} />
            <ILine width={4} />
            <IIcon xml={Icons.TWITTER} size={24} />
            <ILine width={4} />
            <IIcon xml={Icons.TELEGRAM} size={24} />
          </IView>
        </IView>
      </SafeAreaView>
    </IView>
  );
}
