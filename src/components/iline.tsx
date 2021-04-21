import {IView} from './iview';
import * as React from 'react';
import {ViewProps} from 'react-native';

export interface ILineProps extends ViewProps {
  width?: number;
  height?: number;
  color?: string;
  margin?: number;
}

export function ILine(props: ILineProps) {
  return (
    <IView
      style={[
        {
          backgroundColor: props.color ? props.color : 'transparent',
          borderRadius: 0,
          width: props.width ? props.width : '100%',
          height: props.height ? props.height : '100%',
          margin: props.margin ? props.margin : 0,
          alignSelf: 'center',
        },
        props.style,
      ]}></IView>
  );
}
