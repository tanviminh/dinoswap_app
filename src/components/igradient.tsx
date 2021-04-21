import {IText, IView} from 'components';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM, RADIUS_ORIGIN} from 'styles/typography';

export function IGradient(props: any) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#EF476F', '#FF7697']}
      style={{
        width: '100%',
        borderRadius: RADIUS_ORIGIN,
      }}>
      {props.children}
    </LinearGradient>
  );
}
