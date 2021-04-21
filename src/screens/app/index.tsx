import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from 'assets';
import {IIcon, IView} from 'components';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {Colors} from 'styles';
import {scaleSize} from 'styles/mixins';
import {FarmScreen} from './farm/farm.screen';
import {HomeScreen} from './home/home.screen';
import {MoreScreen} from './more/more.screen';
import {PoolScreen} from './pool/pool.screen';
import {SwapTradeScreen} from './swap/swap.screen';
const Tab = createBottomTabNavigator();

const TAB_HOME = 'TAB_HOME';
const TAB_SWAP = 'TAB_SWAP';
const TAB_FARM = 'TAB_FARM';
const TAB_PO0L = 'TAB_PO0L';
const TAB_MORE = 'TAB_MORE';
export function AppScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon;
            switch (route.name) {
              case TAB_HOME:
                icon = Icons.TAB_HOME;
                break;
              case TAB_SWAP:
                icon = Icons.TAB_SWAP;
                break;
              case TAB_PO0L:
                icon = Icons.TAB_POOL;
                break;
              case TAB_FARM:
                icon = Icons.TAB_FARM;
                break;
              case TAB_MORE:
                icon = Icons.TAB_MORE;
                break;

              default:
                icon = Icons.TAB_MORE;
                break;
            }

            return (
              <IIcon
                xml={icon}
                size={24}
                fill={focused ? Colors.BROWN : Colors.LIGHT_GRAY}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.BROWN,
          inactiveTintColor: Colors.LIGHT_GRAY,
          showLabel: false,

          tabStyle: {backgroundColor: 'white', height: '100%'},
          style: {minHeight: scaleSize(60)},
        }}>
        <Tab.Screen name={TAB_HOME} component={HomeScreen} />
        <Tab.Screen name={TAB_SWAP} component={SwapTradeScreen} />
        <Tab.Screen name={TAB_PO0L} component={PoolScreen} />
        <Tab.Screen name={TAB_FARM} component={FarmScreen} />
        <Tab.Screen name={TAB_MORE} component={MoreScreen} />
      </Tab.Navigator>
    </View>
  );
}
