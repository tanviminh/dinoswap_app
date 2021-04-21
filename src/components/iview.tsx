import * as React from 'react';
import {Alert, View, ViewProps, ViewStyle} from 'react-native';
import {scaleStyle} from 'styles/mixins';
import {MARGIN, PADDING, RADIUS_ORIGIN, SHADOW} from 'styles/typography';
import _ from 'lodash';

export interface IViewProps extends ViewProps {
  fit?: number | boolean;
  children?: any;
  horizontal?: boolean;
  center?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  padding?: number | boolean;
  paddingHorizontal?: number | boolean;
  paddingVertical?: number | boolean;
  margin?: number | boolean;
  marginHorizontal?: number | boolean;
  marginVertical?: number | boolean;
  marginTop?: number | boolean;
  marginBottom?: number | boolean;
  marginLeft?: number | boolean;
  marginRight?: number | boolean;

  backgroundColor?: string;
  spaceBetween?: boolean;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | boolean;
  elevation?: number | boolean;
}

export function createStyle(props: IViewProps): ViewStyle {
  let style: ViewStyle = {};
  var temp: any = {};

  //Convert Props Style to Object
  if (!_.isArray(props.style)) {
    temp = props.style;
  } else {
    let arr = props.style as any[];
    arr.map((item: any) => {
      Object.assign(temp, item);
    });
  }
  style = {...temp};

  if (props.horizontal === true) {
    style.flexDirection = 'row';
    if (props.centerVertical) {
      style.alignItems = 'center';
    }
    if (props.centerHorizontal) {
      style.justifyContent = 'center';
    }
  } else {
    if (props.centerVertical) {
      style.justifyContent = 'center';
    }
    if (props.centerHorizontal) {
      style.alignItems = 'center';
    }
  }
  if (props.spaceBetween) {
    style.justifyContent = 'space-between';
  }

  if (props.center) {
    style.alignItems = 'center';
    style.justifyContent = 'center';
  }
  if (props.padding) {
    if (_.isBoolean(props.padding)) {
      style.padding = PADDING;
    } else {
      style.padding = props.padding as number;
    }
  }

  if (props.paddingHorizontal) {
    if (_.isBoolean(props.paddingHorizontal)) {
      style.paddingHorizontal = PADDING;
    } else {
      style.paddingHorizontal = props.paddingHorizontal as number;
    }
  }

  if (props.paddingVertical) {
    if (_.isBoolean(props.paddingVertical)) {
      style.paddingVertical = PADDING;
    } else {
      style.paddingVertical = props.paddingVertical as number;
    }
  }
  if (props.margin) {
    if (_.isBoolean(props.margin)) {
      style.margin = MARGIN;
    } else {
      style.margin = props.margin as number;
    }
  }

  if (props.marginHorizontal) {
    if (_.isBoolean(props.marginHorizontal)) {
      style.marginHorizontal = MARGIN;
    } else {
      style.marginHorizontal = props.marginHorizontal as number;
    }
  }

  if (props.marginVertical) {
    if (_.isBoolean(props.marginVertical)) {
      style.marginVertical = MARGIN;
    } else {
      style.marginVertical = props.marginVertical as number;
    }
  }

  if (props.marginTop) {
    if (_.isBoolean(props.marginTop)) {
      style.marginTop = MARGIN;
    } else {
      style.marginTop = props.marginTop as number;
    }
  }

  if (props.marginBottom) {
    if (_.isBoolean(props.marginBottom)) {
      style.marginBottom = MARGIN;
    } else {
      style.marginBottom = props.marginBottom as number;
    }
  }

  if (props.marginLeft) {
    if (_.isBoolean(props.marginLeft)) {
      style.marginLeft = MARGIN;
    } else {
      style.marginLeft = props.marginLeft as number;
    }
  }

  if (props.marginRight) {
    if (_.isBoolean(props.marginTop)) {
      style.marginRight = MARGIN;
    } else {
      style.marginRight = props.marginRight as number;
    }
  }

  if (props.fit) {
    if (_.isBoolean(props.fit)) {
      style.flex = 1;
    } else {
      style.flex = props.fit as number;
    }
  }

  if (props.borderRadius) {
    if (_.isBoolean(props.borderRadius)) {
      style.borderRadius = RADIUS_ORIGIN as number;
    } else {
      style.borderRadius = props.borderRadius as number;
    }
  }

  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor;
  }

  if (props.elevation) {
    if (_.isBoolean(props.elevation)) {
      style.elevation = SHADOW;
    } else {
      style.elevation = props.elevation as number;
    }
  }

  return scaleStyle(style);
}

export function IView(props: IViewProps) {
  let style = createStyle(props);
  return (
    <View {...props} style={style}>
      {props.children}
    </View>
  );
}
