import _ from 'lodash';
import * as React from 'react';
import FastImage, {
  FastImageProps,
  ImageStyle,
  OnProgressEvent,
} from 'react-native-fast-image';
import {IView, IViewProps} from './iview';
import {Colors, Typography} from '../styles';
import {scaleStyle} from '../styles/mixins';
import {IText} from './itext';

export interface IImageProps extends FastImageProps {
  placeholder?: boolean;
  showProgress?: boolean;
  width?: number | string;
  height?: number | string;
}

export function IImage(props: IImageProps) {
  if (typeof props.source !== 'number') {
    if (!props.source.uri || !props.source.uri.startsWith('http')) {
      return null;
    }
  }
  const [success, setSuccess] = React.useState(false);
  let {placeholder = false, showProgress = false} = props;
  let style: ImageStyle = {};
  if (props.style) {
    style = props.style as ImageStyle;
  }
  if (props.width) {
    style.width = props.width;
  }

  if (props.height) {
    style.height = props.height;
  }

  if (!props.resizeMode) {
    props.resizeMode = 'contain';
  }

  style = scaleStyle(style) as ImageStyle;

  function PlaceHolder() {
    if (!placeholder) {
      return null;
    }
    if (success) {
      return null;
    }
    return (
      <IView
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: Colors.LIGHT_GRAY,
        }}
        center>
        <IText>Dinoswap</IText>
      </IView>
    );
  }

  return (
    <IView style={style}>
      <FastImage
        {...props}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          flex: 1,
        }}
        onError={() => {}}
        onLoad={() => {
          setSuccess(true);
        }}></FastImage>
      <PlaceHolder />
    </IView>
  );
}
