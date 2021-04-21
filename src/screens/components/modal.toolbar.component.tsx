import {Icons} from 'assets';
import {IIcon, IText, ITouch, IView} from 'components';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {BaseProps} from 'screens/base.screen';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {NavigationUtils} from 'utils';

interface Props extends BaseProps {
  title: string;
}

export function ModalToolbarComponent(props: Props) {
  return (
    <IView backgroundColor={Colors.PRIMARY}>
      <StatusBar barStyle="light-content" />
      <View style={{height: getStatusBarHeight()}} />
      <IView horizontal spaceBetween centerVertical>
        <IText
          fontSize={FONTSIZE_MEDIUM}
          marginLeft={20}
          fontWeight="medium"
          color={Colors.WHITE}>
          {props.title}
        </IText>
        <ITouch
          centerVertical
          padding={20}
          onPress={() => {
            NavigationUtils.pop();
          }}>
          <IText color={Colors.SECONDARY}>Close</IText>
        </ITouch>
      </IView>
    </IView>
  );
}
