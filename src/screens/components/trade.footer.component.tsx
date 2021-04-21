import {Icons} from 'assets';
import {IIcon, ILine, IText, IView} from 'components';
import {SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {AvatarComponent} from './avatar.component';
import {LanguageComponent} from './language.component';
import {PrimaryButtonComponent} from './primary.button.component';
import {NavigationUtils} from 'utils';
import {LIST_WALLET_SCREEN} from 'navigations/routes';

export function TradeFooterComponent() {
  return (
    <IView backgroundColor={Colors.PRIMARY}>
      <SafeAreaView>
        <IView
          horizontal
          centerVertical
          width={'100%'}
          paddingHorizontal={20}
          paddingVertical={10}>
          <LanguageComponent />
          <ILine width={10} />
          <IView fit>
            <PrimaryButtonComponent
              onPress={() => {
                NavigationUtils.navigate(LIST_WALLET_SCREEN);
              }}>
              <IView horizontal>
                <IIcon xml={Icons.ENTER} size={24} fill={Colors.PINK} />
                <ILine width={10} />
                <IText
                  fontSize={FONTSIZE_MEDIUM}
                  fontWeight="medium"
                  color={Colors.PINK}>
                  Connect
                </IText>
              </IView>
            </PrimaryButtonComponent>
          </IView>
          <ILine width={10} />
          <AvatarComponent />
        </IView>
      </SafeAreaView>
    </IView>
  );
}
