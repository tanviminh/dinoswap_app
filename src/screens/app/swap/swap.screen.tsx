import {Images} from 'assets';
import {IImage, ILine, IScroll, IView} from 'components';
import React from 'react';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {SwapComponent} from 'screens/components/swap.component';
import {Colors} from 'styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AddLiquidityComponent} from 'screens/components/add.liquidity.component';

const Tab = createMaterialTopTabNavigator();

export function SwapTradeScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView fit>
        <IImage
          style={{position: 'absolute'}}
          width="100%"
          height="100%"
          source={Images.TRADE_BACKGROUND}
          resizeMode="cover"
        />
        <AppToolbarComponent mode="light" />
        <ILine height={10} />
        <IView fit>
          <IScroll>
            <Content />
          </IScroll>
        </IView>
      </IView>
    </IView>
  );
}

function Content() {
  return (
    <IView
      margin
      borderRadius
      backgroundColor={Colors.WHITE}
      style={{overflow: 'hidden'}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.BLACK,
          inactiveTintColor: Colors.LIGHT_GRAY,
          // scrollEnabled: true,
          labelStyle: {
            fontWeight: 'bold',
            textTransform: 'lowercase',
          },
          indicatorStyle: {backgroundColor: Colors.SECONDARY},
        }}>
        <Tab.Screen name="Swap" component={SwapComponent} />
        <Tab.Screen name="+Liquidity" component={AddLiquidityComponent} />
      </Tab.Navigator>
    </IView>
  );
}
