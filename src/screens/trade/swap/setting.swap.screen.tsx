import {Icons} from 'assets';
import {
  IIcon,
  ILine,
  IScroll,
  IText,
  ITextInput,
  ITouch,
  IView,
} from 'components';
import {ALERT_SCREEN} from 'navigations/routes';
import React, {useState} from 'react';
import {BaseProps} from 'screens/base.screen';
import {ModalToolbarComponent} from 'screens/components/modal.toolbar.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_LARGE, FONTSIZE_MEDIUM} from 'styles/typography';
import {NavigationUtils} from 'utils';

interface ItemModel {
  icon: any;
  name: string;
}

export function SettingSwapScreen(props: BaseProps) {
  let callback = props.route?.params?.callback;
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView fit>
        <ModalToolbarComponent title="Transaction Settings" />
        <IView fit>
          <IScroll>
            <Content />
          </IScroll>
          <IView margin>
            <PrimaryButtonComponent
              onPress={() => {
                NavigationUtils.pop();
              }}>
              Confirm
            </PrimaryButtonComponent>
          </IView>
        </IView>
      </IView>
    </IView>
  );
}
function Content() {
  const slippages = [
    {
      value: 0.1,
    },
    {
      value: 0.2,
    },
    {
      value: 0.3,
    },
  ];
  const [slippage, setSlippage] = useState(slippages[0]);
  const [expert, setExpert] = useState(false);
  const [multihop, setMultihop] = useState(false);
  return (
    <IView fit padding={20}>
      <IView fit>
        <IView horizontal centerVertical>
          <IText color={Colors.TEXT_GRAY}>Slippage tolerance</IText>
          <ILine width={10} />
          <ITouch
            onPress={() => {
              NavigationUtils.navigate(ALERT_SCREEN);
            }}>
            <IIcon xml={Icons.QUESTION} fill={Colors.LIGHT_GRAY} size={16} />
          </ITouch>
        </IView>
        <ILine height={10} />
        <IView horizontal spaceBetween>
          {slippages.map((item, index) => {
            const active = slippage.value == item.value ? true : false;
            return (
              <IView key={index} paddingHorizontal={4} center>
                <ITouch
                  paddingVertical={8}
                  paddingHorizontal={16}
                  backgroundColor={active ? Colors.SECONDARY : Colors.GRAY_5}
                  borderRadius
                  onPress={() => {
                    setSlippage(item);
                  }}>
                  <IText textAlignCenter fontWeight="medium">
                    {item.value}%
                  </IText>
                </ITouch>
              </IView>
            );
          })}

          <IView paddingHorizontal={4} center>
            <IView
              paddingVertical={8}
              paddingHorizontal={16}
              backgroundColor={Colors.WHITE}
              borderRadius
              elevation={4}>
              <IText textAlignCenter fontWeight="medium">
                {slippage.value}%
              </IText>
            </IView>
          </IView>
        </IView>
        <ILine height={20} />

        <IView horizontal centerVertical>
          <IText color={Colors.TEXT_GRAY}>Transaction deadline</IText>
          <ILine width={10} />
          <ITouch
            onPress={() => {
              NavigationUtils.navigate(ALERT_SCREEN);
            }}>
            <IIcon xml={Icons.QUESTION} fill={Colors.LIGHT_GRAY} size={16} />
          </ITouch>
        </IView>
        <ILine height={10} />
        <IView horizontal centerVertical>
          <IView backgroundColor={Colors.WHITE} borderRadius elevation={4}>
            <ITextInput
              textAlign="right"
              paddingHorizontal={16}
              paddingVertical={8}
              maxLength={3}
              style={{minWidth: 80, fontWeight: '500'}}></ITextInput>
          </IView>
          <ILine width={10} />
          <IText color={Colors.TEXT_GRAY}>minutes</IText>
        </IView>

        <ILine height={20} />

        <IView horizontal centerVertical>
          <IText
            color={Colors.BLACK}
            fontSize={FONTSIZE_LARGE}
            fontWeight="medium">
            Interafce Settings
          </IText>
        </IView>
        <ILine height={10} />
        <IView horizontal spaceBetween centerVertical>
          <IView horizontal centerVertical>
            <IText color={Colors.TEXT_GRAY}>Toggle Expert Mode</IText>
            <ILine width={10} />
            <ITouch
              onPress={() => {
                NavigationUtils.navigate(ALERT_SCREEN);
              }}>
              <IIcon xml={Icons.QUESTION} fill={Colors.LIGHT_GRAY} size={16} />
            </ITouch>
          </IView>
          <IView>
            <ITouch
              onPress={() => {
                setExpert(!expert);
              }}>
              <IIcon
                xml={expert ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF}
                width={46}
                height={24}
              />
            </ITouch>
          </IView>
        </IView>

        <ILine height={10} />
        <IView horizontal spaceBetween centerVertical>
          <IView horizontal centerVertical>
            <IText color={Colors.TEXT_GRAY}>Disable Multihops</IText>
            <ILine width={10} />
            <ITouch
              onPress={() => {
                NavigationUtils.navigate(ALERT_SCREEN);
              }}>
              <IIcon xml={Icons.QUESTION} fill={Colors.LIGHT_GRAY} size={16} />
            </ITouch>
          </IView>
          <IView>
            <ITouch
              onPress={() => {
                setMultihop(!multihop);
              }}>
              <IIcon
                xml={multihop ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF}
                width={46}
                height={24}
              />
            </ITouch>
          </IView>
        </IView>
      </IView>
    </IView>
  );
}
