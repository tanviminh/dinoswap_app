import {Icons} from 'assets';
import {IIcon, ITouch} from 'components';
import React from 'react';

export function AvatarComponent() {
  return (
    <ITouch>
      <IIcon xml={Icons.AVATAR} size={40} />
    </ITouch>
  );
}
