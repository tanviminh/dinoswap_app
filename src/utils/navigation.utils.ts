import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

const navigationRef: React.RefObject<any> = React.createRef();

function navigate(name: string, params?: object): void {
  navigationRef.current?.navigate(name, params);
}

function push(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function pop(number?: number): void {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

function popToTop(): void {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

function reset(stackName: string): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: stackName}],
    }),
  );
}
function navigateStack(stackName: string, params?: any): void {
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: stackName,
      params: params,
    }),
  );
}

function currentRoute() {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute().name;
  }
  return undefined;
}

export {
  navigationRef,
  navigate,
  push,
  pop,
  popToTop,
  reset,
  navigateStack,
  currentRoute,
};
