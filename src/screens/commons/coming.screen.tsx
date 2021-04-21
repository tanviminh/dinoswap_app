import {Icons} from 'assets';
import {IIcon, ILine, IText, ITouch, IView} from 'components';
import React, {useRef} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_LARGE, FONTSIZE_MEDIUM} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function ComingScreen(props: any) {
  return (
    <IView fit backgroundColor={Colors.WHITE} center>
      <IView center style={{opacity: 0.5}}>
        <IText fontSize={FONTSIZE_LARGE}>Coming soon!</IText>
      </IView>
    </IView>
  );
}
