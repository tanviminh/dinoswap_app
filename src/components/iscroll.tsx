import * as React from 'react';
import {ScrollView, ScrollViewProps, NativeMethods} from 'react-native';
import {scaleStyle} from '../styles/mixins';

export interface IScrollProps
  extends ScrollViewProps,
    React.ClassAttributes<ScrollView> {
  children: any;
  // ref?: React.LegacyRef<ScrollView>;
}

export function IScroll(props: IScrollProps) {
  let style = props.style as ScrollViewProps;
  if (style) {
    style = scaleStyle(style);
  }
  return (
    <ScrollView
      {...props}
      style={style}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  );
}
