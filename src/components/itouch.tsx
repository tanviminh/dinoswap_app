import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {createStyle, IViewProps} from './iview';

export interface ITouchProps extends TouchableOpacityProps, IViewProps {
  children?: any;
  delay?: boolean;
  iconName?: any;
  iconSize?: number;
  iconColor?: string;
}

const WAIT = 300;

/**
 * Prevent double touch
 */
class Debounce {
  static wait: number;
  static onPress(onPress: Function) {
    if (Debounce.wait) {
      return;
    }
    Debounce.wait = WAIT;
    if (onPress) {
      onPress();
    }
    setTimeout(() => {
      Debounce.wait = 0;
    }, WAIT);
  }
}

const initialProps: ITouchProps = {
  delay: true,
};

export function ITouch(props: ITouchProps = initialProps) {
  const handleOnPress = () => {
    const {onPress} = props;
    if (!onPress) {
      return;
    }

    Debounce.onPress(onPress);
  };
  let style = createStyle(props);

  return (
    <TouchableOpacity
      {...props}
      style={style}
      onPress={props.delay ? handleOnPress : props.onPress}
      activeOpacity={0.5}>
      {props.children}
    </TouchableOpacity>
  );
}
