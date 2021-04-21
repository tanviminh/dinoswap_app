import {Icons} from 'assets';
import {IIcon, ILine, IText, ITouch, IView} from 'components';
import {SEARCH_COIN_SCREEN} from 'navigations/routes';
import React, {useState} from 'react';
import {BaseProps} from 'screens/base.screen';
import {
  SearchCoinScreen,
  SearchWalletScreenParams,
} from 'screens/wallet/search.coin.screen';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM, RADIUS_ORIGIN} from 'styles/typography';
import {NavigationUtils} from 'utils';
interface ItemModel {
  icon: any;
  name: string;
}
interface Props extends BaseProps {
  callback: (coin: ItemModel) => void;
}

const initialCoin: ItemModel | null = null;

export function SelectCoinComponent(props: Props) {
  const [coin, setCoin] = useState(initialCoin);
  return (
    <ITouch
      onPress={() => {
        let params: SearchWalletScreenParams = {
          callback: (coin: any) => {
            setCoin(coin);
            if (props.callback) {
              props.callback(coin);
            }
          },
        };
        NavigationUtils.navigate(SEARCH_COIN_SCREEN, params);
      }}>
      <IView
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.WHITE,
          opacity: 0.7,
          borderRadius: RADIUS_ORIGIN,
        }}></IView>
      <IView padding={6} horizontal centerVertical centerHorizontal>
        <IIcon xml={coin ? coin.icon : null} size={24} />
        <ILine width={10} />
        <IText
          fontWeight="medium"
          fontSize={FONTSIZE_MEDIUM}
          color={Colors.LIGHT_BROWN}>
          {coin ? coin.name : 'Select'}
        </IText>
        <ILine width={10} />
        <IIcon xml={Icons.DOWN} size={24} fill={Colors.LIGHT_BROWN} />
      </IView>
    </ITouch>
  );
}
