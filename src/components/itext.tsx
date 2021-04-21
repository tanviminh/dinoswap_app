import * as React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  StyleProp,
  OpaqueColorValue,
  ColorValue,
} from 'react-native';
import {scaleStyle} from '../styles/mixins';
import {FONTSIZE_REGULAR} from 'styles/typography';
import {createStyle, IViewProps} from './iview';

export interface ITextStyle extends TextStyle {}
export interface ITextProps extends TextProps, IViewProps {
  children?: any;
  style?: ITextStyle | StyleProp<ITextStyle>;
  textAlignCenter?: boolean;
  fontSize?: number;
  color?: string | ColorValue;
  fontWeight?: 'bold' | 'medium' | 'regular';
}

const FONT_FAMILY = {
  bold: 'Poppins-Bold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
};

export function convertStyleFromProps(props: ITextProps): TextStyle {
  if (!props) {
    return {};
  }
  let style = createStyle(props) as TextStyle;
  switch (props.fontWeight) {
    case 'bold':
      style = {...style, fontFamily: FONT_FAMILY.bold};
      break;
    case 'medium':
      style = {...style, fontFamily: FONT_FAMILY.medium};
      break;
    case 'regular':
      style = {...style, fontFamily: FONT_FAMILY.regular};
      break;
    default:
      style = {...style, fontFamily: FONT_FAMILY.regular};
      break;
  }
  if (!props.ellipsizeMode) {
    props.ellipsizeMode = 'tail';
  }
  style.fontSize = FONTSIZE_REGULAR;
  style.color = '#000000';
  if (props.fontSize) {
    style.fontSize = props.fontSize;
  }

  if (props.textAlignCenter) {
    style.textAlign = 'center';
  }

  if (props.color) {
    style.color = props.color;
  }
  return style;
}

export function IText(props: ITextProps) {
  let style = convertStyleFromProps(props);

  return (
    <Text {...props} style={style} allowFontScaling={false}>
      {props.children ? props.children : ''}
    </Text>
  );
}
