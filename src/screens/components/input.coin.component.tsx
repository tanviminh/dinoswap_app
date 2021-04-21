import {Icons} from 'assets';
import {IIcon, ILine, IText, ITextInput, ITouch, IView} from 'components';
import React from 'react';
import {Colors} from 'styles';
import {
  FONTSIZE_MEDIUM,
  FONTSIZE_SUPER,
  RADIUS_ORIGIN,
} from 'styles/typography';
import {LogUtils} from 'utils';
import {SelectCoinComponent} from './select.coin.component';

interface Props {
  type: 'from' | 'to';
}

export function InputCoinComponent(props: Props) {
  const {type} = props;

  return (
    <IView borderRadius={RADIUS_ORIGIN} backgroundColor={Colors.PINK}>
      <IView padding={4}>
        <IView horizontal spaceBetween>
          <IText> {type === 'from' ? 'From' : 'To'}</IText>
          <SelectCoinComponent
            callback={(coin: any) => {
              // LogUtils.log(coin);
            }}
          />
        </IView>
        <IView>
          <ITextInput
            keyboardType="numeric"
            fontSize={FONTSIZE_SUPER}
            fontWeight="bold"
            textAlign="center"
            placeholder="0.0"
            padding
          />
        </IView>
      </IView>
    </IView>
  );
}
