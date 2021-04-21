import {Icons} from 'assets';
import {IIcon, IText, ITouch, IView} from 'components';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from 'styles';
import {PADDING} from 'styles/typography';
import {NavigationUtils} from 'utils';

interface Props {
  mode?: 'dark' | 'light';
  navigation: any;
}

export function TradeToolbarComponent(props: Props) {
  return (
    <IView>
      <StatusBar translucent barStyle="light-content" animated />
      <View style={{height: getStatusBarHeight()}} />
      <IView horizontal centerVertical spaceBetween>
        <ITouch
          onPress={() => {
            NavigationUtils.pop();
          }}
          padding>
          <IIcon xml={Icons.LOGO_LIGHT} width={140} height={34} />
        </ITouch>
        <ITouch
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          padding>
          <IIcon
            xml={Icons.HAMBURGER_CLOSE}
            size={24}
            fill={Colors.LIGHT_BROWN}
          />
        </ITouch>
      </IView>
    </IView>
  );
}
