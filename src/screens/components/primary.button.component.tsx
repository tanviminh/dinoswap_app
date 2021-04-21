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

export function PrimaryButtonComponent(props: Props) {
  return (
    <SafeAreaView>
      <ITouch width="100%" height={40} onPress={props.onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#EF476F', '#FF7697']}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: RADIUS_ORIGIN,
          }}>
          <IView fit center paddingHorizontal>
            {_.isString(props.children) ? (
              <IText
                fontSize={FONTSIZE_MEDIUM}
                fontWeight="medium"
                color={Colors.WHITE}>
                {props.children}
              </IText>
            ) : (
              props.children
            )}
          </IView>
        </LinearGradient>
      </ITouch>
    </SafeAreaView>
  );
}
