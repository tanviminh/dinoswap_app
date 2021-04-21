import {Icons} from 'assets';
import {IIcon, ILine, ITouch, IView} from 'components';
import {LIST_WALLET_SCREEN} from 'navigations/routes';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from 'styles';
import {NavigationUtils} from 'utils';
import {PrimaryButtonComponent} from './primary.button.component';

interface Props {
  mode: 'dark' | 'light';
  navigation?: any;
}

export function AppToolbarComponent(props: Props) {
  return (
    <IView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={props.mode === 'dark' ? 'dark-content' : 'light-content'}
        animated
      />
      <View style={{height: getStatusBarHeight()}} />
      <IView horizontal centerVertical spaceBetween padding>
        <IIcon
          xml={props.mode === 'dark' ? Icons.LOGO_DARK : Icons.LOGO_LIGHT}
          width={140}
          height={34}
        />
        <IView horizontal centerVertical>
          <PrimaryButtonComponent
            onPress={() => {
              NavigationUtils.navigate(LIST_WALLET_SCREEN);
            }}>
            Connect
          </PrimaryButtonComponent>
          <ILine width={10} />
          <ITouch>
            <IIcon xml={Icons.AVATAR} size={40} />
          </ITouch>
        </IView>
      </IView>
    </IView>
  );
}
