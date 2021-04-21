import React from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
interface Props {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
}
export function IStatusBar(props: Props) {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={props.barStyle ? props.barStyle : 'dark-content'}
      />
      <View
        style={{
          height: getStatusBarHeight(),
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : 'white',
        }}
      />
    </View>
  );
}
