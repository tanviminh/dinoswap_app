import React from 'react';
import {Dimensions, PixelRatio, ViewStyle} from 'react-native';
import {createShaddowFromElevation} from './shaddow';
import _ from 'lodash';
const WINDOW_WIDTH = Dimensions.get('window').width;
const GUIDE_LINE_BASE_WIDTH = 380;

function scaleSize(size: number): number {
  return PixelRatio.roundToNearestPixel(
    (WINDOW_WIDTH / GUIDE_LINE_BASE_WIDTH) * size,
  );
}

function scaleFont(size: number): number {
  return size * PixelRatio.getFontScale();
}

/**
 * Convert style to newStyle for all devices size
 * @param style is object or array style
 */
function scaleStyle(style: any): ViewStyle {
  var newStyle: any = {};
  var temp: any = {};

  if (!_.isArray(style)) {
    temp = style;
  } else {
    style.map((item: Object) => {
      Object.assign(temp, item);
    });
  }
  newStyle = {...temp};
  try {
    Object.keys(temp).map((key: string) => {
      if (typeof temp[key] == 'number') {
        if (key.startsWith('width')) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (key.startsWith('height')) {
          newStyle[key] = scaleSize(temp[key]);
        }

        if (key.startsWith('margin')) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (key.startsWith('padding')) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (key.startsWith('borderWidth')) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (key.startsWith('borderRadius')) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (
          key.startsWith('top') ||
          key.startsWith('right') ||
          key.startsWith('bottom') ||
          key.startsWith('left')
        ) {
          newStyle[key] = scaleSize(temp[key]);
        }
        if (key.startsWith('fontSize')) {
          newStyle[key] = scaleFont(temp[key]);
        }
        if (key.startsWith('elevation')) {
          Object.assign(newStyle, createShaddowFromElevation(temp[key]));
        }
      }
    });
  } catch (error) {}
  return newStyle;
}

export {scaleSize, scaleFont, scaleStyle};
