import {useNavigation, useRoute} from '@react-navigation/core';
import {Icons} from 'assets';
import {IIcon, ILine, IText, ITouch, IView} from 'components';
import {POOL_SCREEN, POOL_STACK, SWAP_SCREEN} from 'navigations/routes';
import React from 'react';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TradeFooterComponent} from 'screens/components/trade.footer.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM, FONTSIZE_SUPER} from 'styles/typography';
import {NavigationUtils} from 'utils';

const items = [
  {
    key: SWAP_SCREEN,
    title: 'Swap',
    onPress: () => {
      NavigationUtils.reset(SWAP_SCREEN);
    },
  },
  {
    key: POOL_SCREEN,
    title: 'Pool',
    onPress: () => {
      NavigationUtils.reset(POOL_STACK);
    },
  },
  {
    title: 'Stake',
    onPress: () => {},
  },
  {
    title: 'Limit',
    onPress: () => {},
  },
  {
    title: 'Analytics',
    onPress: () => {},
  },
];
export function TradeDrawer(props: any) {
  const {navigation} = props;

  return (
    <IView fit backgroundColor={Colors.PRIMARY}>
      <SafeAreaView style={{height: '100%'}}>
        <IView fit>
          <ITouch
            onPress={() => {
              navigation.toggleDrawer();
            }}
            padding={20}>
            <IIcon
              xml={Icons.HAMBURGER_OPEN}
              size={24}
              fill={Colors.LIGHT_BROWN}
            />
          </ITouch>

          <ILine height={1} color={Colors.LIGHT_BROWN} />

          {items.map((item, index) => {
            return <Item key={index} data={{item, index}} />;
          })}
        </IView>

        <TradeFooterComponent />
      </SafeAreaView>
    </IView>
  );
}

function Item(props: any) {
  const {item, index} = props.data;
  let active = NavigationUtils.currentRoute() === item.key ? true : false;
  return (
    <IView backgroundColor={active ? Colors.SECONDARY : 'transparent'}>
      <ITouch
        onPress={() => {
          item.onPress();
        }}
        padding={20}>
        <IText
          color={Colors.WHITE}
          fontSize={FONTSIZE_SUPER}
          fontWeight="medium">
          {item.title}
        </IText>
      </ITouch>
    </IView>
  );
}
