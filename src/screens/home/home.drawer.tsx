import React from 'react';
import {IView, IText, ITouch, ILine, IIcon} from 'components';
import {Colors} from 'styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SUPER,
} from 'styles/typography';
import {Icons} from 'assets';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {BrowserUtils, NavigationUtils} from 'utils';
import {DOC_URL} from 'consts';
import {SWAP_SCREEN, TRADE_STACK} from 'navigations/routes';

export function HomeDrawer(props: any) {
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

          <ITouch
            onPress={() => {
              NavigationUtils.navigateStack(TRADE_STACK);
              navigation.toggleDrawer();
            }}
            padding={20}>
            <IText
              color={Colors.WHITE}
              fontSize={FONTSIZE_SUPER}
              fontWeight="medium">
              Trade
            </IText>
          </ITouch>
          <ITouch
            onPress={() => {
              BrowserUtils.openLink(DOC_URL);
              navigation.toggleDrawer();
            }}
            padding={20}>
            <IText
              color={Colors.WHITE}
              fontSize={FONTSIZE_SUPER}
              fontWeight="medium">
              Docs
            </IText>
          </ITouch>

          <ITouch padding={20}>
            <IText
              color={Colors.WHITE}
              fontSize={FONTSIZE_SUPER}
              fontWeight="medium">
              Forum
            </IText>
          </ITouch>
        </IView>

        <IView horizontal paddingHorizontal={20} centerVertical>
          <IIcon xml={Icons.ENG} size={40} />
          <ILine width={10} />
          <IView fit>
            <PrimaryButtonComponent>
              <IView horizontal>
                <IIcon xml={Icons.ENTER} size={24} fill={Colors.PINK} />
                <ILine width={10} />
                <IText
                  fontSize={FONTSIZE_MEDIUM}
                  fontWeight="medium"
                  color={Colors.PINK}>
                  Enter app
                </IText>
              </IView>
            </PrimaryButtonComponent>
          </IView>
        </IView>
      </SafeAreaView>
    </IView>
  );
}
