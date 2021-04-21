import {Icons} from 'assets';
import {IIcon, IText, ITouch, IView} from 'components';
import React from 'react';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM, PADDING, RADIUS_ORIGIN} from 'styles/typography';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

interface Props {
  onPress: () => void;
  children?: any;
}

export function SecondaryButtonComponent(props: Props) {
  return (
    <ITouch width="100%" height={40} onPress={props.onPress}>
      <IView
        fit
        center
        style={{
          borderWidth: 2,
          borderRadius: RADIUS_ORIGIN,
          borderColor: Colors.SECONDARY,
          backgroundColor: Colors.WHITE,
        }}>
        {_.isString(props.children) ? (
          <IText
            fontSize={FONTSIZE_MEDIUM}
            fontWeight="medium"
            color={Colors.SECONDARY}>
            {props.children}
          </IText>
        ) : (
          props.children
        )}
      </IView>
    </ITouch>
  );
}
