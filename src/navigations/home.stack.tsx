import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {HomeScreen} from 'screens/home/home.screen';
import {HOME_SCREEN} from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SwapScreen} from 'screens/trade/swap/swap.screen';
import {HomeDrawer} from 'screens/home/home.drawer';
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default HomeStack;
