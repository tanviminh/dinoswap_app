import {Icons} from 'assets';
import {IIcon, ILine, IScroll, IText, ITouch, IView} from 'components';
import {DOC_URL} from 'consts';
import {GOVERNANCE_SCREEN, LANGUAGE_SCREEN} from 'navigations/routes';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {BrowserUtils, NavigationUtils} from 'utils';

export function MoreScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <AppToolbarComponent mode="dark" />
      <IScroll style={{flex: 1}}>
        <IView fit>
          <ITouch padding={20} horizontal centerVertical>
            <IIcon xml={Icons.TEAM} size={24} fill={Colors.LIGHT_BROWN} />
            <ILine width={12} />
            <IText
              fontWeight="medium"
              fontSize={FONTSIZE_MEDIUM}
              color={Colors.LIGHT_BROWN}>
              Team & Profile
            </IText>
          </ITouch>

          <ITouch
            padding={20}
            horizontal
            centerVertical
            onPress={() => {
              NavigationUtils.navigate(GOVERNANCE_SCREEN);
            }}>
            <IIcon xml={Icons.GOVERNANCE} size={24} fill={Colors.LIGHT_BROWN} />
            <ILine width={12} />
            <IText
              fontWeight="medium"
              fontSize={FONTSIZE_MEDIUM}
              color={Colors.LIGHT_BROWN}>
              Governance
            </IText>
          </ITouch>

          <IView>
            <IView padding={20} horizontal centerVertical>
              <IIcon xml={Icons.FORUM} size={24} fill={Colors.LIGHT_BROWN} />
              <ILine width={12} />
              <IText
                fontWeight="medium"
                fontSize={FONTSIZE_MEDIUM}
                color={Colors.LIGHT_BROWN}>
                Forum
              </IText>
            </IView>
            <IView backgroundColor={Colors.GRAY_6}>
              <ITouch
                padding={20}
                horizontal
                onPress={() => {
                  BrowserUtils.openLink(DOC_URL);
                }}>
                <ILine width={36} />
                <IText>Docs</IText>
              </ITouch>
              <ITouch padding={20} horizontal>
                <ILine width={36} />
                <IText>Discord</IText>
              </ITouch>
              <ITouch padding={20} horizontal>
                <ILine width={36} />
                <IText>Twitter</IText>
              </ITouch>
              <ITouch padding={20} horizontal>
                <ILine width={36} />
                <IText>Wechat</IText>
              </ITouch>
            </IView>
          </IView>
        </IView>
      </IScroll>
      <IView horizontal spaceBetween padding={20}>
        <ITouch
          horizontal
          centerVertical
          onPress={() => {
            NavigationUtils.navigate(LANGUAGE_SCREEN);
          }}>
          <IIcon xml={Icons.ENG} size={40} />
          <ILine width={12} />
          <IText fontWeight="medium" color={Colors.BROWN}>
            ENG
          </IText>
        </ITouch>
      </IView>
    </IView>
  );
}
