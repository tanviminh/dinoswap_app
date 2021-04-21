import {ScaleFromCenterAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import * as React from 'react';
import {ViewStyle} from 'react-native';
import {SvgProps, SvgXml} from 'react-native-svg';
import {scaleSize, scaleStyle} from '../styles/mixins';

/**
 * Icon is always square
 * Not use width, height -- use size
 */
export interface IIconProps extends SvgProps {
  xml: any;
  size?: number;
  width?: number;
  height?: number;
}

export function IIcon(props: IIconProps) {
  let style = props.style as ViewStyle;
  if (style) {
    style = scaleStyle(style);
  }
  let width = 0;
  let height = 0;
  if (props.size) {
    width = height = scaleSize(props.size);
  }
  if (props.width) {
    width = scaleSize(props.width);
  }
  if (props.height) {
    height = scaleSize(props.height);
  }
  return (
    <SvgXml
      {...props}
      style={style}
      xml={props.xml}
      width={width}
      height={height}></SvgXml>
  );
}
