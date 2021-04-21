import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icons, Images} from 'assets';
import {IIcon, IImage, ILine, IScroll, IText, ITouch, IView} from 'components';
import React from 'react';
import {ComingScreen} from 'screens/commons/coming.screen';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {Colors} from 'styles';
import {scaleSize} from 'styles/mixins';
import {
  FONTSIZE_LARGE,
  FONTSIZE_REGULAR,
  FONTSIZE_SUPER,
} from 'styles/typography';
import {NavigationUtils} from 'utils';
import {TimelookScreen} from './timelook.screen';
import {TreasuryScreen} from './treasury.screen';

const Tab = createMaterialTopTabNavigator();

export function GovernanceScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView fit>
        <AppToolbarComponent mode="dark" />
        <ILine height={1} color={Colors.LINE} />
        <ILine height={10} />
        <IView fit>
          <IView horizontal centerVertical>
            <ITouch
              padding
              onPress={() => {
                NavigationUtils.pop();
              }}>
              <IIcon xml={Icons.BACK} size={24} fill={Colors.BLACK} />
            </ITouch>
            <IText fontSize={FONTSIZE_LARGE} fontWeight="medium">
              Governance
            </IText>
          </IView>

          <Content />
        </IView>
      </IView>
    </IView>
  );
}

function Content() {
  return (
    <IView fit backgroundColor={Colors.WHITE} style={{overflow: 'hidden'}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.BLACK,
          inactiveTintColor: Colors.LIGHT_GRAY,
          scrollEnabled: false,

          labelStyle: {
            fontWeight: '500',
            textTransform: 'capitalize',
            fontSize: scaleSize(FONTSIZE_REGULAR),
          },
          indicatorStyle: {backgroundColor: Colors.SECONDARY},
        }}>
        <Tab.Screen name="Timelook" component={TimelookScreen} />
        <Tab.Screen name="Forum" component={ComingScreen} />
        <Tab.Screen name="Treasury" component={TreasuryScreen} />
      </Tab.Navigator>
    </IView>
  );
}
