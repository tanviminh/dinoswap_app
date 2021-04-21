import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {TradeDrawer} from 'screens/trade/drawer/trade.drawer';
import {AddLiquidityScreen} from 'screens/trade/liquidity/add.liquidity.screen';
import {CreatePairScreen} from 'screens/trade/pair/create.pair.screen';
import {PoolScreen} from 'screens/trade/pool/pool.screen';
import {SwapScreen} from 'screens/trade/swap/swap.screen';
import {
  CREATE_PAIR_SCREEN,
  POOL_SCREEN,
  SWAP_SCREEN,
  POOL_STACK,
  ADD_LIQUIDITY_SCREEN,
} from './routes';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function TradeStack() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <TradeDrawer {...props} />}>
      <Drawer.Screen name={SWAP_SCREEN} component={SwapScreen} />
      <Drawer.Screen name={POOL_STACK} component={PoolStack} />
      <Drawer.Screen name={CREATE_PAIR_SCREEN} component={CreatePairScreen} />
    </Drawer.Navigator>
  );
}

function PoolStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={POOL_SCREEN} component={PoolScreen} />
      <Stack.Screen name={CREATE_PAIR_SCREEN} component={CreatePairScreen} />
      <Stack.Screen
        name={ADD_LIQUIDITY_SCREEN}
        component={AddLiquidityScreen}
      />
    </Stack.Navigator>
  );
}

export default TradeStack;
