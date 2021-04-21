import {Icons} from 'assets';
import {IIcon, ITouch, IView} from 'components';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from 'styles';

interface Props {
  mode?: 'dark' | 'light';
  navigation: any;
}

export function HomeToolbarComponent(props: Props) {
  return (
    <IView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        animated
      />
      <View style={{height: getStatusBarHeight()}} />
      <IView horizontal centerVertical spaceBetween padding>
        <IIcon xml={Icons.LOGO_DARK} width={140} height={34} />
        <ITouch
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
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
