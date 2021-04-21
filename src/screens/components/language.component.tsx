import {Icons} from 'assets';
import {IIcon, ITouch} from 'components';
import React from 'react';

export function LanguageComponent() {
  return (
    <ITouch>
      <IIcon xml={Icons.ENG} size={40} />
    </ITouch>
  );
}
