import * as React from 'react';
import {
  NativeMethods,
  TextInput,
  TextInputProps,
  StyleProp,
} from 'react-native';
import {Colors} from 'styles';
import {scaleStyle} from '../styles/mixins';
import {convertStyleFromProps, ITextStyle, ITextProps} from './itext';
import {createStyle} from './iview';

export interface ITextInputProps extends ITextProps, TextInputProps {
  style?: ITextStyle | StyleProp<ITextStyle>;
  ref?: React.LegacyRef<TextInput>;
}

export function ITextInput(props: ITextInputProps) {
  let textStyle = convertStyleFromProps(props);

  return (
    <TextInput
      {...props}
      style={textStyle}
      placeholderTextColor={Colors.TEXT_GRAY}
      autoCorrect={false}></TextInput>
  );
}
