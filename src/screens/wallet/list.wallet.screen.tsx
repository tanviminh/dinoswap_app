import {Icons} from 'assets';
import {IIcon, ILine, IList, IText, ITouch, IView} from 'components';
import {DOC_URL} from 'consts';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {BaseProps} from 'screens/base.screen';
import {ModalToolbarComponent} from 'screens/components/modal.toolbar.component';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {BrowserUtils} from 'utils';

interface ItemModel {
  icon: any;
  name: string;
}

interface ItemProps {
  data: {
    index: number;
    item: ItemModel;
  };
  callback?: (data: ItemModel) => void;
}

export interface SearchWalletScreenParams {
  callback: (data: ItemModel) => void;
}

const items: ItemModel[] = [
  {
    icon: Icons.METAMASK,
    name: 'Metamask',
  },
  {
    icon: Icons.WALLET_CONNECT,
    name: 'WalletConnect',
  },
  {
    icon: Icons.WALLET_CONNECT,
    name: 'Lattice',
  },
  {
    icon: Icons.COINBASE,
    name: 'Coinbase Wallet',
  },
  {
    icon: Icons.FORTMATIC,
    name: 'Fortmatic',
  },
  {
    icon: Icons.PORTIS,
    name: 'Portis',
  },
];

export function ListWalletScreen(props: BaseProps) {
  let callback = props.route?.params?.callback;
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView style={{flex: 1}}>
        <ModalToolbarComponent title="Connect to wallet" />
        <SafeAreaView style={{flex: 1}}>
          <IList
            data={items}
            renderItem={({item, index}) => {
              return (
                <ITouch
                  key={index}
                  onPress={() => {
                    if (callback) {
                      callback(item);
                    }
                  }}>
                  <IView
                    padding
                    horizontal
                    centerVertical
                    spaceBetween
                    borderRadius
                    backgroundColor={Colors.GRAY_6}>
                    <IText fontWeight="medium" fontSize={FONTSIZE_MEDIUM}>
                      {item.name}
                    </IText>
                    <IIcon xml={item.icon} size={40} />
                  </IView>
                </ITouch>
              );
            }}
            ItemSeparatorComponent={() => {
              return <ILine height={10} />;
            }}
            contentContainerStyle={{padding: 10}}
          />
        </SafeAreaView>
        <SafeAreaView>
          <ITouch
            center
            horizontal
            onPress={() => {
              BrowserUtils.openLink(DOC_URL);
            }}>
            <IText color={Colors.TEXT_GRAY}>Learn how to connect?</IText>
            <ILine width={10} />
            <IIcon xml={Icons.QUESTION} size={16} fill={Colors.GRAY_5} />
          </ITouch>
        </SafeAreaView>
      </IView>
    </IView>
  );
}
