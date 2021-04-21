import {useIsFocused} from '@react-navigation/core';
import {Icons} from 'assets';
import {IIcon, ILine, IList, IText, ITouch, IView} from 'components';
import {ALERT_SCREEN, LIST_WALLET_SCREEN} from 'navigations/routes';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {FooterComponent} from 'screens/components/footer.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_LARGE, FONTSIZE_SUPER, MARGIN} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function PoolScreen() {
  return (
    <IView fit backgroundColor={Colors.PRIMARY}>
      <AppToolbarComponent mode="light" />
      <IList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        refreshing={false}
        onRefresh={() => {}}
        contentContainerStyle={{padding: 10}}
        ItemSeparatorComponent={() => {
          return <ILine height={10} />;
        }}
        ListHeaderComponent={() => {
          return <Header />;
        }}
        renderItem={data => {
          return <Item data={data} key={data.index} />;
        }}
        ListFooterComponent={() => {
          return <Footer />;
        }}
      />
    </IView>
  );
}

function Header() {
  const [finished, setFinished] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <IView>
      <IText color={Colors.PINK} fontSize={FONTSIZE_SUPER} fontWeight="medium">
        Dino Pool
      </IText>
      <IText color={Colors.WHITE}>
        Stake DINO to earn new tokens. You can unstake at any time. Rewards are
        calculated per block.
      </IText>
      <ILine height={20} />
      <IView horizontal centerVertical>
        <ITouch
          onPress={() => {
            setFinished(!finished);
          }}>
          <IIcon
            xml={finished ? Icons.FINISHED_ON : Icons.LIVE_ON}
            height={24}
            width={100}
          />
        </ITouch>
        <ILine width={10} />
        <ITouch
          onPress={() => {
            setToggle(!toggle);
          }}>
          <IIcon
            xml={toggle ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF}
            height={24}
            width={46}
          />
        </ITouch>
        <ILine width={10} />

        <IText color={Colors.WHITE}>Stack only</IText>
      </IView>
      <ILine height={40} />
    </IView>
  );
}

function Item(props: any) {
  const [expaned, setExpand] = useState<boolean>(false);
  return (
    <IView backgroundColor={Colors.WHITE} padding borderRadius>
      <IText fontSize={FONTSIZE_LARGE} fontWeight="medium">
        Dino Pool
      </IText>
      <ILine height={MARGIN} />
      <IView style={{alignItems: 'flex-start'}}>
        <IView>
          <IIcon xml={Icons.ETH} size={40} />
          <IIcon
            xml={Icons.DINO}
            size={20}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              borderColor: Colors.WHITE,
              borderWidth: 4,
              borderRadius: 100,
            }}
          />
        </IView>
      </IView>
      <ILine height={MARGIN} />

      <IText fontSize={FONTSIZE_LARGE} fontWeight="medium">
        0.000000
      </IText>
      <IText fontWeight="medium" color={Colors.BROWN}>
        DINO earned
      </IText>
      <ILine height={MARGIN} />
      <IView>
        <PrimaryButtonComponent
          onPress={() => {
            NavigationUtils.navigate(LIST_WALLET_SCREEN);
          }}>
          Unlock wallet
        </PrimaryButtonComponent>
      </IView>
      <ILine height={MARGIN} />

      <IView>
        <IView horizontal spaceBetween centerVertical>
          <IView fit>
            <IText color={Colors.TEXT_GRAY}>APR</IText>
          </IView>
          <IView fit horizontal spaceBetween centerVertical>
            <IText color={Colors.TEXT_GRAY} fontWeight="medium">
              101.20%
            </IText>
            <ITouch>
              <IIcon xml={Icons.SWAP} size={16} fill={Colors.LIGHT_GRAY} />
            </ITouch>
          </IView>
        </IView>
        <ILine height={MARGIN} />

        <IView horizontal spaceBetween centerVertical>
          <IView fit>
            <IText color={Colors.TEXT_GRAY}>Your Stake</IText>
          </IView>
          <IView fit horizontal spaceBetween centerVertical>
            <IText color={Colors.TEXT_GRAY} fontWeight="medium">
              0.000
            </IText>
            <ITouch
              onPress={() => {
                NavigationUtils.navigate(ALERT_SCREEN);
              }}>
              <IIcon xml={Icons.QUESTION} size={16} fill={Colors.LIGHT_GRAY} />
            </ITouch>
          </IView>
        </IView>
      </IView>
      <ILine height={MARGIN} />
      <ILine height={1} color={Colors.LINE} />
      <ILine height={MARGIN} />
      <IView horizontal spaceBetween centerVertical>
        <IIcon xml={Icons.CORE} width={63} height={24} />
        <ITouch
          horizontal
          centerVertical
          onPress={() => {
            setExpand(!expaned);
          }}>
          <IText color={Colors.SECONDARY} fontWeight="medium">
            Detail
          </IText>
          <ILine width={MARGIN} />

          <IIcon xml={Icons.DOWN} size={16} fill={Colors.SECONDARY} />
        </ITouch>
      </IView>

      {expaned ? (
        <IView>
          <ILine height={MARGIN * 2} />
          <IView horizontal spaceBetween centerVertical>
            <IText color={Colors.BROWN}>Total</IText>
            <IText color={Colors.BROWN} fontWeight="bold">
              100.000.000
            </IText>
          </IView>
          <ILine height={MARGIN} />

          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY} fontWeight="medium" textAlignCenter>
              Add DINO to Metamask
            </IText>
            <ILine width={10} />
            <IIcon xml={Icons.METAMASK} size={20} fill={Colors.SECONDARY} />
          </IView>
          <ILine height={MARGIN} />

          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY} fontWeight="medium" textAlignCenter>
              View project site
            </IText>
            <ILine width={10} />
            <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
          </IView>
        </IView>
      ) : null}
    </IView>
  );
}

function Footer() {
  return (
    <IView>
      <FooterComponent />
    </IView>
  );
}
