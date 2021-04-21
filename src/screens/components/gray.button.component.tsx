import {Icons} from 'assets';
import {IIcon, IText, ITouch, IView} from 'components';
import React from 'react';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM, PADDING, RADIUS_ORIGIN} from 'styles/typography';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import {SafeAreaView} from 'react-native';

interface Props {
  onPress?: () => void;
  children?: any;
}

export function GrayButtonComponent(props: Props) {
  return (
    <SafeAreaView>
      <ITouch width="100%" height={40} onPress={props.onPress}>
        <IView
          fit
          center
          paddingHorizontal
          borderRadius
          backgroundColor={Colors.GRAY_5}>
          {_.isString(props.children) ? (
            <IText
              fontSize={FONTSIZE_MEDIUM}
              fontWeight="medium"
              color={Colors.TEXT_GRAY}>
              {props.children}
            </IText>
          ) : (
            props.children
          )}
        </IView>
      </ITouch>
    </SafeAreaView>
  );
}
